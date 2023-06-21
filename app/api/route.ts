import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const memesDB: MemeDB[] = await prisma.meme.findMany({
      orderBy: {
        id: "asc",
      },
    });
    const memesJSON = JSON.stringify(memesDB);
    return new Response(memesJSON, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//<--- Seeding DB --->
// export async function POST(request: Request) {
//   const memes = await memesAPI();
//   console.log(memes);

//   for (const meme of memes) {
//     try {
//       const updateResult = await prisma.meme.updateMany({
//         where: {
//           memeID: {
//             contains: meme.id,
//           },
//         },
//         data: {
//           url: meme.url,
//         },
//       });

//       console.log('Zaktualizowano rekordy:', updateResult);
//     } catch (error) {
//       console.error('Wystąpił błąd podczas aktualizacji rekordów:', error);
//     }
//   }

//   const memesJSON = JSON.stringify({ message: "Likes updated" });

//   return new Response(memesJSON, {
//     headers: { "Content-Type": "application/json" },
//   });
// }

//<--- Update Likes in DB --->
export async function PUT(request: Request) {
  const { memeKey, emotion } = await request.json();

  const meme = await prisma.meme.findUnique({
    where: {
      memeID: memeKey,
    },
  });

  let updateData: any;
  if (emotion === "Like") {
    if (meme !== null) {
      let likes = meme.likes;

      updateData = {
        where: {
          memeID: memeKey,
        },
        data: {
          likes: likes + 1,
        },
      };
    } else {
      console.log("Error: meme not found");
    }
  } else if (emotion === "Dislike") {
    if (meme !== null) {
      let dislikes = meme.dislikes;

      updateData = {
        where: {
          memeID: memeKey,
        },
        data: {
          dislikes: dislikes + 1,
        },
      };
    }
  } else {
    console.log("Error: emotion not found");
  }

  const updateMemes = await prisma.meme.update(updateData);
  console.log("Meme updated:", updateMemes);

  const memesJSON = JSON.stringify({ message: "Likes updated" });

  return new Response(memesJSON, {
    headers: { "Content-Type": "application/json" },
  });
}
