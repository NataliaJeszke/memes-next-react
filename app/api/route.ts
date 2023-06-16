import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const memesDB: MemeDB[] = await prisma.meme.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const memesJSON = JSON.stringify(memesDB);
  return new Response(memesJSON, {
    headers: { "Content-Type": "application/json" },
  });
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
  const { memeID, emotion } = await request.json();

  const meme = await prisma.meme.findUnique({
    where: {
      memeID: memeID,
    },
  });

  let updateData: any;
  if (emotion === "Like") {
    if (meme !== null) {
      let likes = meme.likes;

      updateData = {
        where: {
          memeID: memeID,
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
          memeID: memeID,
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

//////////////////////////////////////////////////////////////////////
export async function memesAPI() {
  const url = "https://api.imgflip.com/get_memes";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data.memes;
  } catch (error) {
    console.log(error);
  }
}
