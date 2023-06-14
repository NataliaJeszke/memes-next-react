'use client'

import style from "./rating.module.css";
import { Rate } from "../../../lib/rate";

interface RatingProps{
    memeKey: string;
}

export function Rating({memeKey}:RatingProps){

    return(
        <div className={style.rating_container}>
            <div>
            <Rate initialNumber={0} emotion="Like" memeID={memeKey}/>
            </div>
            <div>
            <Rate initialNumber={0} emotion="Dislike" memeID={memeKey}/>
            </div>
        </div>
    )
}