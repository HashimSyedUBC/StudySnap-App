// pages/api/courses.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readCourses, Course } from "../../backend/readCourses"

type Data = {
  courses: Course[] | null;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const courses = await readCourses();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ courses: null, error: 'Failed to read courses' });
  }
}