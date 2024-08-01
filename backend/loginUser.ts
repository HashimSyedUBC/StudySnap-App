// backend/auth.ts
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
interface User {
  username: string;
  password: string;
}

const usersFilePath ="/Users/hashsyd/StudySnap-App/public/users.json"
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use an environment variable in production

export const loginUser = async (username: string, password: string) => {
    console.log(password, username)
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    console.log(usersData)
    const users: User[] = JSON.parse(usersData);
    console.log(users)

    const user = users.find(u => u.username === username);

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const passwordMatch = user.password == password;

    if (!passwordMatch) {
      return { success: false, message: 'Incorrect password' };
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return { 
      success: true, 
      message: 'Login successful', 
      user: { username: user.username },
      token 
    };

  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred during login' };
  }
};