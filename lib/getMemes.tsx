export default async function getMemes() {
    const url = "https://api.imgflip.com/get_memes";
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data.data.memes;
    }
    catch(error){
        console.log(error);
    }
  
}