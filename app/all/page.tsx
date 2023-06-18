import { MemeAll } from "../components/meme/memeAll";
import style_main from "../main.module.css";


export default async function All() {
  const content = (
    <>
      <h2 className={style_main.subtitle}>All Memes</h2>
      <MemeAll />
    </>
  );

  return content;
}
