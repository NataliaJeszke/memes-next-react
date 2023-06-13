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

  return (
    <div>
      <p onClick={handleClick}>{emotion}</p>
      <p>{number}</p>
    </div>
  );
}

