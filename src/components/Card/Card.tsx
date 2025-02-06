type Props = {
    name: string;
    description: string;
    value: number;
    image: string;
}

export function Card({ name, description, value, image }: Props) {
    return (
        <>
            <div className="card">
                <div className="cardImage">
                    <img
                        className="image"
                        src={image}
                        alt="Air Jordan 1 High Zoom CMFT Tropical Twist"
                    />
                </div>
                <div className="cardText">
                    <p className="cardTitle">
                        {name}
                    </p>
                    <p className="cardDescription">{description}</p>
                    <p className="cardValue">R$ {value}</p>
                </div>
            </div>
        </>
    )
};