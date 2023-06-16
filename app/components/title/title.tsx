interface TitleProps {
    title: string;
}

export function Title({title}: TitleProps) {
    return (
        <div>
            <h5>{title}</h5>
        </div>
    )
}