import Image from 'next/image';
interface MemeProps {
    url: string;
    key: string;
}

export function Pic({url, key}: MemeProps){
    return(
        <><Image src={url} alt="meme" width={250} height={250} key={key} /></>
    )
}