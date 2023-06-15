import { PrismaClient } from '@prisma/client';
import { getMemesDB } from '../app/api/route';
import { Rating } from '../app/components/rating/rating';


const prisma = new PrismaClient();

interface MemesDB {

    memeKey: string;
  }

async function memeStats(memeKey: string) {
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



  export default function Stats({memeKey}:MemesDB){
        // const stats = memeStats();
        // console.log(stats)


        return(
            <div>
                  <p>Likes z serwera</p>
            <p>{memeKey}</p>
            <Rating  memeKey={memeKey}/>
            </div>
          
        )
  }

  

