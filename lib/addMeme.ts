interface IUAddMeme {
  title: string;
  url: string;
}
const address = process.env.NEXT_PUBLIC_BACKEND_URL_ADD;
export const handlePutRequestAddMeme = async ({ title, url }: IUAddMeme) => {
  try {
    const response = await fetch(`${address}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, url }),
    });

    if (response.ok) {
      // Sukces - przetwarzanie odpowiedzi
    } else {
      // Obsługa błędu
    }
  } catch (error) {
    // Obsługa błędu sieciowego
  }
};
