import React, { useContext } from "react";
import "./TextArea.css";
import { ThemeContext } from "../App";

const TextArea = ({ label, placeText }) => {
    const { theme } = useContext(ThemeContext);
    console.log(theme);

    return (
        <div className="textarea-section">
            <label
                className="textarea-section__label"
                style={
                    theme === "dark"
                        ? { backgroundColor: "#000" }
                        : { backgroundColor: "#fff" }
                }
            >
                {label}
            </label>
            <textarea
                className="textarea-section__textarea"
                placeholder={placeText || ""}
            ></textarea>
        </div>
    );
};

export default TextArea;
