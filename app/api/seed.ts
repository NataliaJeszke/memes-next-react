import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type Meme = {
  id: number;
  title: string;
  likes: number;
  dislikes: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Meme[]>
) {
  const memes = await prisma.meme.findMany();

  res.status(200).json(memes);
}
