import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Footer.css";
import {
    FaFacebook,
    FaGooglePlusSquare,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="footer">
            <p className="footer-title">Quoc Duy</p>
            <ul
                className={`footer-lists`}
                style={theme === "dark" ? { color: "#fff" } : { color: "#000" }}
            >
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Project</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.facebook.com/helianthusanuus1003"
                    target="_blank"
                >
                    <FaFacebook />
                </a>
                <a href="#" target="_blank">
                    <FaGooglePlusSquare />
                </a>
                <a href="#" target="_blank">
                    <FaInstagram />
                </a>
                <a href="#" target="_blank">
                    <FaYoutube />
                </a>
            </div>
            <p className="footer_allright">
                <BiCopyright /> Quoc Duy. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
