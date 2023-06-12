import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  return new Response("Hello world!");
}

export async function POST(request: Request) {
  let meme: Prisma.MemeCreateInput;

  meme = {
    id: 1,
    memeID: 1,
    title: "Elsa Prisma",
    likes: 10,
    dislikes: 5,
  };
  const createMeme = await prisma.meme.create({ data: meme });
}
