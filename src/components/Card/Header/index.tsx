import React from "react";
import Title from "./Title";

interface TitleProps {
    title: string;
}

const Header = ({ title }: TitleProps) => {
    return (
        <div className="card-header bg-success-subtle">
            <Title title={title} />
        </div>
    );
};

export default Header;
