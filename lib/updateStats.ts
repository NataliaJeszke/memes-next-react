interface IUpdateStats {
  memeKey: string;
  emotion: string;
}
const url = process.env.NEXT_PUBLIC_BACKEND_URL_API;
export const handlePutRequest = async ({memeKey, emotion}:IUpdateStats) => {
  try {
    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ memeKey, emotion }),
    });

    if (response.ok) {
      console.log('response ok');
    } else {
      console.log('response not ok');
    }
  } catch (error) {
    console.log(error);
  }
};
