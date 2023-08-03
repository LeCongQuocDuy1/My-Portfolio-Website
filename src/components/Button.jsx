import React from "react";
import "./Button.css";

const Button = ({ text, primary, outline, width, icon }) => {
    return (
        <button
            className={`btn ${primary && "btn-primary"} ${
                outline && "btn-outline"
            }`}
            style={{ width: width + "px" }}
        >
            <p>{text || ""}</p>
            {icon || ""}
        </button>
    );
};

export default Button;
