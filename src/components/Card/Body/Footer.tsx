import React from "react";

interface FooterProps {
    footer: string;
}

const Footer = ({ footer }: FooterProps) => {
    return (
        <div className="card-footer bg-success-subtle">
            <p>{footer}</p>
        </div>
    );
};

export default Footer;
