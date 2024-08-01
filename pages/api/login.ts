// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { loginUser } from '../../backend/loginUser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;
  console.log(username, password, "thishsiashfda")
  try {
    const result = await loginUser(username, password);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
}