import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav/page";
import Image from "next/image";
import styles from "./page.module.css";
import style_main from "./main.module.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memes Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <div className={styles.description}>
          <Link href="/"><p>Memes Next ReactJS Project</p></Link>
            <div>
              <a
                href="https://github.com/NataliaJeszke"
                target="_blank"
                rel="noopener noreferrer"
              >
                More projects on GitHub{" "}
                <Image
                  src="/github.svg"
                  alt="Github Logo"
                  className={styles.vercelLogo}
                  width={50}
                  height={40}
                  priority
                />
              </a>
            </div>
          </div>
          <div className={styles.center}><section className={style_main.main}>{children}</section></div>
          <div>
            <Nav />
          </div>
        </main>
      </body>
    </html>
  );
}
