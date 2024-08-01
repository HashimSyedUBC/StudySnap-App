// pages/api/chapters.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { readChapters, Chapter } from "../../backend/readChapters";

type Data = {
  chapters: Chapter[] | null;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { courseCode } = req.query;

  if (typeof courseCode !== 'string') {
    res.status(400).json({ chapters: null, error: 'Invalid course name' });
    return;
  }

  try {
    const chapters = readChapters(courseCode);
    res.status(200).json({ chapters });
  } catch (error) {
    res.status(500).json({ chapters: null, error: 'Failed to read chapters' });
  }
}
