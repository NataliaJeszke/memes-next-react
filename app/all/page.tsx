import { Metadata } from "next/types";
import { MemeAll } from "../components/meme/memeAll";

export const metadata: Metadata = {
  title: "All Memes",
};
export default async function All() {
  const content = (
    <>
      <h2>All Memes</h2>
      <MemeAll />
    </>
  );

  return content;
}
