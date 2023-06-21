export async function memesAPI() {
  const url = "https://api.imgflip.com/get_memes";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data.memes;
  } catch (error) {
    console.log(error);
  }
}
