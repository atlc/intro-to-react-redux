import React from "react";
import { textSelector } from "../../../store/reducers/cardText";
import { useSelector } from "react-redux";

const TitleText = () => {
    const title = useSelector(textSelector);
    return <h1 className="text-center">{title}</h1>;
};

export default TitleText;
