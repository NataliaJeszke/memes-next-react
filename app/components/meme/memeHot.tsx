"use client";

import { useEffect, useState } from "react";
import style from "./meme.module.css";
import { Rate } from "../rate/rate";
import { Pic } from "../pic/pic";
import { Title } from "../title/title";
import {Failure} from "../failure/failure";
import { fetchData } from "../../../lib/getMemes";


export function MemeHot() {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetchData()
      .then(jsonData => setData(jsonData))
      .catch(error => console.log('Error fetching data:', error));
  }, []);



  const memes = () => {
    if (data === undefined || data.length === 0) {
      return(<div><Failure data={data}/></div>)
    }else{
      return (
        <div className={style.rating_container}>
          {data.map((meme: MemeDB) => (
            <div key={meme.memeID}>
              <Pic url={meme.url} key={meme.memeID} />
              <Title title={meme.title} />
              <div>
                <Rate
                  initialNumber={meme.likes}
                  emotion="Like"
                  memeKey={meme.memeID}
                />
              </div>
              <div>
                <Rate
                  initialNumber={meme.dislikes}
                  emotion="Dislike"
                  memeKey={meme.memeID}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return memes();
}
