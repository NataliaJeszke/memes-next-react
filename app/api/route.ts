import { PrismaClient, Prisma } from "@prisma/client";
import getMemes from "../../lib/getMemes";

const prisma = new PrismaClient();

async function memesAPI() {
  const memes = await getMemes();
  return memes;
}

export async function GET(request: Request) {
  const memesDB: MemeDB[] = await prisma.meme.findMany();
  const memesJSON = JSON.stringify(memesDB);
  return new Response(memesJSON, { headers: { "Content-Type": "application/json" } });
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

export async function getMemesDB() {
  const memesDB: MemeDB[] = await prisma.meme.findMany();
  const memesJSON = JSON.stringify(memesDB);
  return new Response(memesJSON, { headers: { "Content-Type": "application/json" } });
}

