"use client";

import { useEffect, useState } from "react";
import style from "./meme.module.css";
import { Rate } from "../rate/rate";
import { Pic } from "../pic/pic";
import { Title } from "../title/title";
import {Failure} from "../failure/failure";
import { fetchHot } from "../../../lib/hotMemes";


export function MemeHot() {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetchHot()
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
              <Pic url={meme.url} memekey={meme.memeID} />
              <Title title={meme.title} />
              <div className={style.rate_container}>
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
            </div>
          ))}
        </div>
      );
    }
  };

  return memes();
}
