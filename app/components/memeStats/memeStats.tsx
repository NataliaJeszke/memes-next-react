
import { Rating } from '../rating/rating';


interface MemesDB {

    memeKey: string;
  }


  export default function Stats({memeKey}:MemesDB){

        return(
          <div>
         <Rating memeKey={memeKey}/>
        </div>
          
        )
  }

  

