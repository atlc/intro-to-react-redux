import React from "react";

interface BodyTextProps {
    text: string;
}

const BodyText = ({ text }: BodyTextProps) => {
    return <p>{text}</p>;
};

export default BodyText;
