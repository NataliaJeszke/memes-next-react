import { MemeHot } from "../components/meme/memeHot";
import style_main from "../main.module.css";

export default function Hot() {
  return (
    <>
      <h2 className={style_main.subtitle}>Hot Memes</h2>
      <MemeHot />
    </>
  );
}
