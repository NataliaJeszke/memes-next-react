import Image from "next/image";
import add from "../../media/add.png";
import style from "./header.module.css";
import Link from "next/link";


export default function AddMeme(){
    return(
        <div className={style.container}>
            <Link href="/form" className={style.container}>
            Add your MEME{" "}
            <Image
                  src={add}
                  alt="Add Meme icon"
                  width={40}
                  height={40}
                  className={style.addBtn}
                  priority
                />
          </Link>
        </div>
    );
}