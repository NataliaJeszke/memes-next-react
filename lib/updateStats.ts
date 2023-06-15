import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const stats = async function memeStats(memeKey: string) {
    const updateMeme = await prisma.meme.update({
        where: {
          memeID: memeKey,
        },
        data: {
          likes: 5,
        },
      })
        return updateMeme
  }

export default stats;