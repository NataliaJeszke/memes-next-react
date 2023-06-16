import { useEffect, useState } from "react";


interface RatingProps {
  initialNumber?: number;
  emotion: string;
  memeKey: string;

}

export function Rate({ initialNumber=0, emotion, memeKey }: RatingProps) {
  const [number, setNumber] = useState(initialNumber);
  const [data, setData] = useState(null);
  const url = process.env.BACKEND_URL_API

  const handleClick = async () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  
  // useEffect(() => {
  //   if (number > 0) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:3000/api`, {
  //           method: 'PUT',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ emotion: emotion, memeID: memeID }),
  //         });
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [number]);
  
  return (
    <div>
      <p onClick={handleClick}>{emotion}</p>
      <p>{number}</p>
    </div>
  );
}

