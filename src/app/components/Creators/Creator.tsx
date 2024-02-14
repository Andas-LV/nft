import React from 'react';

type CreatorProps = {
    name: string;
    verified: boolean;
    currentBid: number | null;
    image: string | null;
};

const Card: React.FC<CreatorProps> = (
    { name, verified, currentBid,image }
) => {
    const imageUrl = image ? image : '/default-image.jpg';

    return (
        <div>
            <h2>{name}</h2>
            <h3>{currentBid}</h3>
            <p>{verified}</p>
            <img src={imageUrl} alt={name}/>
        </div>
    );
};

export default Card;