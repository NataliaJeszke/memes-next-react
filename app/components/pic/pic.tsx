import Image from 'next/image';
interface MemeProps {
    url: string;
    memekey: string;
}

export function Pic({url, memekey}: MemeProps){
    return(
        <><Image src={url} alt="meme" width={250} height={250} key={memekey} /></>
    )
}