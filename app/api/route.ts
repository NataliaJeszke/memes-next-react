import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const memesDB: MemeDB[] = await prisma.meme.findMany();
  const memesJSON = JSON.stringify(memesDB);
  return new Response(memesJSON, {
    headers: { "Content-Type": "application/json" },
  });
}

// export async function POST(request: Request) {
//   const memesTags = await memesAPI();
//   console.log(memesTags);

//   for (const meme of memesTags) {
//     const createMeme = await prisma.meme.createMany({
//       data: [{ memeID: meme.id, title: meme.name, likes: 0, dislikes: 0 }],
//     });
//     console.log("Meme created:", createMeme);
//   }
// }

export async function PUT() {
  const updateMeme = await prisma.meme.update({
    where: {
      memeID: "87743020",
    },
    data: {
      likes: 10,
    },
  });
  console.log("Meme updated:", updateMeme);
}

export async function getMemes() {
  const url = "https://api.imgflip.com/get_memes";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data.memes;
  } catch (error) {
    console.log(error);
  }
}

export async function getMemesDB() {
  const memesDB: MemeDB[] = await prisma.meme.findMany();
  const memesJSON = JSON.stringify(memesDB);
  return new Response(memesJSON, {
    headers: { "Content-Type": "application/json" },
  });
}
