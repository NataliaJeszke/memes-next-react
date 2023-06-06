import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav/page";
import Image from "next/image";
import styles from "./page.module.css";

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
            <p>Memes Next ReactJS Project</p>
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

          <div className={styles.center}>{children}</div>

          <div className={styles.grid}>
            <Nav />
            {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
          </div>
        </main>
      </body>
    </html>
  );
}
