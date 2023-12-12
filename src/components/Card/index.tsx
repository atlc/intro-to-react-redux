import React from "react";
import Header from "./Header";
import Body from "./Body";

interface CardProps {
    text: string;
    title: string;
    footer: string;
}

const Card = ({ text, title, footer }: CardProps) => {
    return (
        <div className="card my-5 shadow-lg p-2">
            <Header title={title} />
            <Body text={text} footer={footer} />
        </div>
    );
};

export default Card;
