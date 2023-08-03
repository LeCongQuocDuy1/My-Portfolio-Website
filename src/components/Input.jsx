import React, { useContext } from "react";
import "./Input.css";
import { ThemeContext } from "../App";

const Input = ({ type, label, placeText }) => {
    const { theme } = useContext(ThemeContext);
    console.log(theme);

    return (
        <div className="input-section">
            <label
                className="input-section__label"
                style={
                    theme === "dark"
                        ? { backgroundColor: "#000" }
                        : { backgroundColor: "#fff" }
                }
            >
                {label}
            </label>
            <input
                type={type || "text"}
                placeholder={placeText || ""}
                className="input-section__input"
            />
        </div>
    );
};

export default Input;
