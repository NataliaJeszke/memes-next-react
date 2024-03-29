"use client";
const url = process.env.NEXT_PUBLIC_BACKEND_URL_API;
export const fetchData = async () => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      return undefined;
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log("Error fetching data:", error);
    return undefined;
  }
};
