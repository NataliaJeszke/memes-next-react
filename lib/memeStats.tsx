import { PrismaClient } from '@prisma/client';
import { getMemesDB } from '../app/api/route';


const prisma = new PrismaClient();

interface MemesDB {
    numbers: MemesDB[];
    stats: any;
    number: number;
  }

async function memeStats() {
    const updateMeme = await prisma.meme.update({
        where: {
          memeID: "87743020",
        },
        data: {
          likes: 5,
        },
      })
        return updateMeme
  }


  export default function Stats(){
        const stats = memeStats();
        const numbers= getMemesDB();
        console.log(stats)
        console.log(numbers)
        return(
            <p>tekst</p>
        )
  }

  

