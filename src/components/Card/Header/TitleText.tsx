import React from "react";
import { getTitle } from "../../../store/reducers/cardTitle";
import { useSelector } from "react-redux";

const TitleText = () => {
    const title = useSelector(getTitle);
    return <h1 className="text-center">{title}</h1>;
};

export default TitleText;
