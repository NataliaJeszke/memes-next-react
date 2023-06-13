'use client'
import { useState } from "react";

interface RatingProps {
  initialNumber?: number;
  emotion: string;
}

export function Rate({ initialNumber=0, emotion }: RatingProps) {
  const [number, setNumber] = useState(initialNumber);

  const handleClick = () => {
    setNumber(number + 1);
  };

  if (emotion === "Like") {
    console.log(`Lajki +${number}`)
  } else {
    console.log(`Dislajki+${number}`)
  }

  return (
    <div>
      <p onClick={handleClick}>{emotion}</p>
      <p>{number}</p>
    </div>
  );
}

