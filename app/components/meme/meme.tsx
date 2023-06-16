'use client'

import { useEffect, useState } from 'react';
import style from "./meme.module.css";
import { Rate } from "../rate/rate";
import { Pic } from "../pic/pic";
import { Title } from '../title/title';


export function Meme() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className={style.rating_container}>
      {data.map((meme: MemeDB) => (
        <div key={meme.memeID}>
          <Pic url={meme.url} key={meme.memeID}/>
          <Title title={meme.title}/>
          <div>
            <Rate initialNumber={meme.likes} emotion="Like" memeKey={meme.memeID}/>
          </div>
          <div>
            <Rate initialNumber={meme.dislikes} emotion="Dislike" memeKey={meme.memeID}/>
          </div>
        </div>
      ))}
    </div>
  );
}
