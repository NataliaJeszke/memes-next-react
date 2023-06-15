import Image from "next/image";
import React from "react";
import { Metadata } from "next/types";
import style from "./main.module.css";
import { Rating } from "../components/rating/rating";
import Stats from "../../lib/memeStats";


interface Memes {
  memes: MemeDB[];
  memeKey: string;
}

export const metadata: Metadata = {
  title: "Main Memes"
}
export default async function Main() {

  const url = process.env.BACKEND_URL_API
  const response = await fetch(`${url}`, {
  method: 'GET',
});
const memes = await response.json();

  const content = (
    <section className={style.main}>
    <h2>First 10 memes</h2>
    <div className={style.main_memes}>
      {memes.map((meme:any) => 
    <div className={style.meme}><Image src={meme.url} alt="meme" width={250} height={250} key={meme.memeID} /><p>{meme.title}</p>
    <Rating  memeKey={meme.memeID}/>
    <Stats memeKey={meme.memeID}/>
    </div>
  )}
    </div>
    </section>

  );

  return content
}

