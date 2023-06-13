'use client'
import { useState } from "react";
import style from "./rating.module.css";
import { Like } from "./like/like";

interface RatingProps{
    memeKey: string;
    initialLike?: number;
}

export function Rating({memeKey}:RatingProps, _initLike: RatingProps){
    console.log(memeKey)

    const [like, setLike] = useState(_initLike.initialLike ?? 0)

    const handleClickLike = () => {
         console.log({memeKey})
        setLike(like + 1);
        return(
            like
        )
        }


    return(
        <div className={style.rating_container}>
            <div>
            <Like initialLike={like}/>
            </div>
            <div>
            <p>Dislike</p>
            <p>0</p>
            </div>
        </div>
    )
}