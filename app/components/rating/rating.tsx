import style from "./rating.module.css";

interface RatingProps{
    memeKey: string;
}

export function Rating({memeKey}:RatingProps){
    console.log(memeKey)
    return(
        <div className={style.rating_container}>
            <div>
            <p>Like</p>
            <p>0</p>
            </div>
            <div>
            <p>Dislike</p>
            <p>0</p>
            </div>
        </div>
    )
}