import fs from "fs";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Meme = {
  id: number;
  title: string;
};

type ImgflipMeme = {
  id: string;
  name: string;
};

type ImgflipMemesResponse = {
  success: boolean;
  data: {
    memes: ImgflipMeme[];
  };
};

(async () => {
  try {
    // Pobierz memy z API Imgflip
    const response = await axios.get<ImgflipMemesResponse>(
      "https://api.imgflip.com/get_memes"
    );

    const imgflipMemes = response.data.data.memes;

    // Przekształć memy na format CSV
    const csvData = imgflipMemes
      .map((meme) => `${meme.id},${meme.name}`)
      .join("\n");

    // Zapisz memy do pliku
    fs.writeFileSync("memes.csv", csvData, "utf-8");

    console.log("Memes saved to memes.csv");
  } catch (error) {
    console.error("Failed to fetch and save memes:", error);
  }
})();

async function importData() {
  try {
    // Odczytaj dane z pliku CSV
    const csvData = fs.readFileSync('memes.csv', 'utf-8');

    // Przetwórz dane i zapisz w bazie danych
    const memeData: Meme[] = csvData
      .split('\n')
      .map((row) => {
        const [id, title] = row.split(',');
        return { id: parseInt(id), title };
      })
      .filter((meme) => !isNaN(meme.id)); // Filtrowanie nieprawidłowych danych

    // Zapisz memy w bazie danych przy użyciu Prisma
    await prisma.meme.createMany({
      data: memeData,
      skipDuplicates: true, // Pomijanie zduplikowanych rekordów
    });

    console.log('Memes imported successfully');
  } catch (error) {
    console.error('Failed to import memes:', error);
  } finally {
    await prisma.$disconnect(); // Zamknięcie połączenia Prisma z bazą danych
  }
}

importData();