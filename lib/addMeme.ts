interface AddMeme {
  title: string;
  url: string;
}
const address = process.env.NEXT_PUBLIC_BACKEND_URL_ADD;
export const handlePutRequestAddMeme = async ({ title, url }: AddMeme) => {
  try {
    const response = await fetch(`${address}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, url }),
    });
  } catch (error) {
    console.log("Error adding meme to db:", error);
  }
};
