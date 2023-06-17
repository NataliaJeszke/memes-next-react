import React from "react";
import { Metadata } from "next/types";
import style from "./main.module.css";
import { MemeMain } from "../components/meme/memeMain";

export const metadata: Metadata = {
  title: "Main Memes",
};
export default async function Main() {
  const content = (
    <section className={style.main}>
      <h2>Random memes</h2>
      <MemeMain />
    </section>
  );

  return content;
}
