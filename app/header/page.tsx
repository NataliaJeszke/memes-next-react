import Image from "next/image";
import add from "../../media/add.png";
import style from "./header.module.css";


export default function AddMeme(){
    return(
        <div>
             <a
                href="https://github.com/NataliaJeszke"
                target="_blank"
                rel="noopener noreferrer"
                className={style.container}
              >
                Add your MEME{" "}
                <Image
                  src={add}
                  alt="Add Meme icon"
                  width={40}
                  height={40}
                  className={style.addBtn}
                  priority
                />
              </a>
        </div>
    );
}