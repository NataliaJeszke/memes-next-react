import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  const { title, url } = await request.json();
  try {
    const memeID = generateUUID();

    const createdMeme = await prisma.meme.create({
      data: {
        memeID: memeID,
        title: title,
        likes: 0,
        dislikes: 0,
        url: url,
      },
    });

    console.log("Created meme:", createdMeme);
  } catch (error) {
    console.error("Error while creating meme:", error);
  }

  const responseJSON = JSON.stringify({ message: "Meme created" });

  return new Response(responseJSON, {
    headers: { "Content-Type": "application/json" },
  });
}

function generateUUID() {
  const uuid = uuidv4();
  return uuid;
}
