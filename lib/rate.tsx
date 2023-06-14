import { useState } from "react";


interface RatingProps {
  initialNumber?: number;
  emotion: string;
  memeID: string
}

export function Rate({ initialNumber=0, emotion, memeID }: RatingProps) {
  const [number, setNumber] = useState(initialNumber);

  const handleClick = async () => {
    setNumber(number + 1);

  
  // if (emotion === "Like") {
  //   function stats(emotion: string, number: number, memeID: string) {
  //     fetch("/api/route", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ emotion, number, memeID }),
  //     });
  //     stats(emotion, number, memeID);
  //   }
  // } else {
  //   console.log(`Dislajki+${number}`)
  // }

  }

  return (
    <div>
      <p onClick={handleClick}>{emotion}</p>
      <p>{number}</p>
    </div>
  );
}

