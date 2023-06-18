import { useState } from "react";
import { handlePutRequest } from "../../../lib/updateStats";

interface RatingProps {
  initialNumber?: number;
  emotion: string;
  memeKey: string;
}

export function Rate({ initialNumber = 0, emotion, memeKey }: RatingProps) {
  const [number, setNumber] = useState(initialNumber);

  const handleUpdateMeme = async () => {
    setNumber((prevNumber) => prevNumber + 1);
    try {
      handlePutRequest({ memeKey, emotion });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <p onClick={handleUpdateMeme}>{emotion}</p>
      <p>{number}</p>
    </div>
  );
}
