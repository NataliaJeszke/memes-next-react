import React from "react";
import { Metadata } from "next/types";
import style from "./main.module.css";
import { Meme} from "../components/meme/meme";


export const metadata: Metadata = {
  title: "Main Memes"
}
export default async function Main() {


  const content = (
    <section className={style.main}>
    <h2>First 10 memes</h2>
    <Meme />
    </section>

  );

  return content
}

