// import { PrismaClient } from "@prisma/client";

// const memes = await prisma.meme.create({
//   data: {
//     id: 1,
//     title: "Elsa Prisma",
//     likes: 10,
//     dislikes: 5,
//   },
// });
// memes();

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let meme: Prisma.MemeCreateInput;

  meme = {
    id: 1,
    title: "Elsa Prisma",
    likes: 10,
    dislikes: 5,
  };
  const createMeme = await prisma.meme.create({ data: meme });
  console.log(createMeme);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
