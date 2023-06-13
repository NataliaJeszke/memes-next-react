'use client'

import { useState } from "react";

interface RatingProps{
    initialLike?: number;
}

export function Like(_initLike: RatingProps){
    const [like, setLike] = useState(_initLike.initialLike ?? 0)

    const handleClickLike = () => {
        setLike(like + 1);
        return like
    }

    return(
   <div>
            <p onClick={handleClickLike}>Like</p>
            <p>{like}</p>
            </div>
    )
}

