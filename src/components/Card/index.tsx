import React from "react";
import Header from "./Header";
import Body from "./Body";

const Card = () => {
    return (
        <div className="card my-5 shadow-lg p-2">
            <Header />
            <Body />
        </div>
    );
};

export default Card;
