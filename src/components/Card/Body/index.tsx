import React from "react";
import Footer from "./Footer";
import BodyText from "./BodyText";

interface BodyProps {
    text: string;
    footer: string;
}

const Body = ({ text, footer }: BodyProps) => {
    return (
        <div className="card-body">
            <BodyText text={text} />
            <Footer footer={footer} />
        </div>
    );
};

export default Body;
