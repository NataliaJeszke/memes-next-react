import Image from "next/image";
import React from "react";

import { Metadata } from "next/types";


export const metadata: Metadata = {
  title: "All Memes"
}
export default async function All(){
    const memes: Promise <Meme[]> = getMemes();
    const meme = await memes;
  
    const content = (
      <section>
      <h2>All Memes</h2>
      <div>
        {meme.map((meme:any) => 
      <div><Image src={meme.url} alt="meme" width={250} height={250} key={meme.id} /><p>{meme.name}</p></div>
    )}
      </div>
      </section>
    );
  
    return content
}