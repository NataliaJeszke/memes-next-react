import React from "react";
import Link from "next/link";
import style from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/all" className={style.glass_button}>
            All Memes
          </Link>
        </li>
        <li className={style.li}>
          <Link href="/hot" className={style.glass_button}>
            Hot Memes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
