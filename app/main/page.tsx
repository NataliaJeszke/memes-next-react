import Image from "next/image";
import React from "react";
import getMemes from "../../lib/getMemes";
import { Metadata } from "next/types";


export const metadata: Metadata = {
  title: "Main Memes"
}
export default async function Main() {
  const memes: Promise <Meme[]> = getMemes();
  const meme = await memes;

  const content = (
    <section>
      <h2>Memes</h2>
      {meme.map((meme:any) => 
    <Image src={meme.url} alt="meme" width={100} height={100} key={meme.id} />
  )}
    </section>
  );

  return content
}

