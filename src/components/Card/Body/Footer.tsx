import React from "react";
import { useSelector } from "react-redux";
import { footerSelector } from "../../../store/reducers/cardFooter";

const Footer = () => {
    const footer = useSelector(footerSelector);
    return (
        <div className="card-footer bg-success-subtle">
            <p>{footer}</p>
        </div>
    );
};

export default Footer;
