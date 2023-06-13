'use client'

import style from "./rating.module.css";
import { Rate } from "../../../lib/rating";

interface RatingProps{
    memeKey: string;
}

export function Rating({memeKey}:RatingProps){

    return(
        <div className={style.rating_container}>
            <div>
            <Rate initialNumber={0} emotion="Like"/>
            </div>
            <div>
            <Rate initialNumber={0} emotion="Dislike"/>
            </div>
        </div>
    )
}