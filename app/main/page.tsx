import React from "react";
import style_main from "../main.module.css";
import { Metadata } from "next/types";
import { MemeMain } from "../components/meme/memeMain";

export const metadata: Metadata = {
  title: "Main Memes",
};
export default async function Main() {
  const content = (
    <>
      <h2 className={style_main.subtitle}>Random memes</h2>
      <MemeMain />
    </>
  );

  return content;
}
