import React from 'react';

type CardProps = {
    title: string;
    content: string | null;
    author: { name: string | null; } | null;
    image: string | null;
};

const Card: React.FC<CardProps> = (
    { title, content, author,image }
) => {
    const imageUrl = image ? image : '/default-image.jpg';

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>{author?.name}</h3>
            <img src={imageUrl} alt={title}/>
        </div>
    );
};

export default Card;