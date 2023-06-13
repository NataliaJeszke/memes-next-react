import Image from "next/image";
import React from "react";
import getMemes from "../../lib/getMemes";
import { Metadata } from "next/types";
import style from "./main.module.css";
import { Rating } from "../components/rating/rating";
import { getMemesDB } from "../api/route";

interface Memes {
  memes: Meme[];
  memesDB: MemeDB[];
}

export const metadata: Metadata = {
  title: "Main Memes"
}
export default async function Main() {
  const memes: Promise <Meme[]> = getMemes();
  const meme = await memes;
  meme.splice(-90);

  const memesDB = getMemesDB();
  const memeDB = await memesDB;
  console.log(memeDB);

  const content = (
    <section className={style.main}>
    <h2>First 10 memes</h2>
    <div className={style.main_memes}>
      {meme.map((meme:any) => 
    <div className={style.meme}><Image src={meme.url} alt="meme" width={250} height={250} key={meme.id} /><p>{meme.name}</p>
    <Rating memeKey={meme.id}/>
    </div>
  )}
    </div>
    </section>
  );

  return content
}

