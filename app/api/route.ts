import { PrismaClient, Prisma } from "@prisma/client";
import getMemes from "../../lib/getMemes";

const prisma = new PrismaClient();

async function memesAPI() {
  const memes = await getMemes();
  return memes;
}

export async function GET(request: Request) {
  return new Response("Hello world!");
}

export async function POST(request: Request) {
  const memesTags = await memesAPI();
  console.log(memesTags);

  for (const meme of memesTags) {
    const createMeme = await prisma.meme.createMany({
      data: [{ memeID: meme.id, title: meme.name, likes: 0, dislikes: 0 }],
    });
    console.log("Meme created:", createMeme);
  }
}
