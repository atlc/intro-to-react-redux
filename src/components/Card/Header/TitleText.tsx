import React from "react";

interface TitleTextProps {
    title: string;
}

const TitleText = ({ title }: TitleTextProps) => {
    return <h1 className="text-center">{title}</h1>;
};

export default TitleText;
