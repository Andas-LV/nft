import React from "react";

type Author = {
    name: string | null;
};

type CardProps = {
    title: string;
    content: string | null;
    author: Author | null;
    image: string | undefined;
};

const Card: React.FC<CardProps> = ({ title, content, author, image }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>By: {author?.name}</p>
            <img src={image} alt={title} />
        </div>
    );
};

export default Card;
