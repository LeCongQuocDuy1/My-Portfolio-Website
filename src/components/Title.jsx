import React from "react";
import "./Title.css";

const Title = ({ title, desc }) => {
    return (
        <div className="section-title">
            <div className="head-section">
                <p className="head-section__desc">{desc}</p>
                <h3 className="head-section__title">{title}</h3>
            </div>
        </div>
    );
};

export default Title;
