import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Footer.css";
import {
    FaFacebook,
    FaGooglePlusSquare,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const menuOptions = t("menuOptions", { returnObjects: true });

    return (
        <div className="footer">
            <a href="#" className="footer-title">
                {t("logo")}
            </a>
            <ul
                className={`footer-lists`}
                style={theme === "dark" ? { color: "#fff" } : { color: "#000" }}
            >
                {menuOptions.map((item, index) => {
                    return (
                        <li
                            className={`${item?.href === "#" ? `active` : ``}`}
                            key={index}
                        >
                            <a href={item?.href}>{item?.text}</a>
                        </li>
                    );
                })}
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.facebook.com/helianthusanuus1003"
                    target="_blank"
                    rel="noreferrer"
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
                <BiCopyright /> {t("footer.copyRight")}
            </p>
        </div>
    );
};

export default Footer;
