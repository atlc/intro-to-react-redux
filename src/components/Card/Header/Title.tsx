import React from "react";
import TitleText from "./TitleText";

interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return <TitleText title={title} />;
};

export default Title;
