import React from "react";
import { useSelector } from "react-redux";
import { textSelector } from "../../../store/reducers/cardText";

const BodyText = () => {
    const text = useSelector(textSelector);
    return <p>{text}</p>;
};

export default BodyText;
