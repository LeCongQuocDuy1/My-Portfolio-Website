import { useContext, useState } from "react";
import "./Navbar.css";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeContext } from "../../App";
import en from "../../../src/assets/en.png";
import vn from "../../../src/assets/vn.png";
import { useTranslation } from "react-i18next";
import i18n from "../../assets/i18n";

const Navbar = () => {
    const { theme, handleChangeTheme } = useContext(ThemeContext);
    const [toggleModal, setToggleModal] = useState(false);
    const [isSwitchLang, setIsSwitchLang] = useState(false);
    const { t } = useTranslation();
    const menuOptions = t("menuOptions", { returnObjects: true });

    const changeLanguages = (lng) => {
        setIsSwitchLang(!isSwitchLang);
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar-container">
            <a href="#" className="navbar-logo">
                {t("logo")}
            </a>
            <div className="navbar-right">
                <ul
                    className="navbar-lists"
                    style={
                        theme === "dark" ? { color: "#fff" } : { color: "#000" }
                    }
                >
                    {menuOptions.map((item, index) => {
                        return (
                            <li
                                className={`${
                                    item?.href === "#" ? `active` : ``
                                }`}
                                key={index}
                            >
                                <a href={item?.href}>{item?.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="navbar-languages">
                    {isSwitchLang ? (
                        <img
                            src={en}
                            alt=""
                            className="navbar-languages__icon navbar-languages__icon--en"
                        />
                    ) : (
                        <img
                            src={vn}
                            alt=""
                            className="navbar-languages__icon navbar-languages__icon--vn"
                        />
                    )}
                    <div className="navbar-languages__dropdown">
                        <div
                            className="navbar-languages__items"
                            onClick={() => changeLanguages("vi")}
                        >
                            <img
                                src={vn}
                                alt="Việt Nam"
                                className="navbar-languages__dropdown-icon"
                            />
                            <p className="navbar-languages__text">Tiếng Việt</p>
                        </div>
                        <div
                            className="navbar-languages__items"
                            onClick={() => changeLanguages("en")}
                        >
                            <img
                                src={en}
                                alt="English"
                                className="navbar-languages__dropdown-icon"
                            />
                            <p className="navbar-languages__text">English</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-theme">
                    {theme === "light" ? (
                        <FaSun
                            onClick={handleChangeTheme}
                            className="navbar-theme__icon"
                        />
                    ) : (
                        <FaMoon
                            onClick={handleChangeTheme}
                            className="navbar-theme__icon"
                        />
                    )}
                    <AiOutlineMenu
                        onClick={() => setToggleModal(!toggleModal)}
                        className="navbar-theme__icon2"
                    />
                </div>
            </div>
            {toggleModal && (
                <div className="navbar-modal">
                    <FaTimes
                        onClick={() => setToggleModal(!toggleModal)}
                        className="navbar-modals__delete"
                    />
                    <ul
                        className="navbar-modal__lists"
                        style={
                            theme === "dark"
                                ? { color: "#fff" }
                                : { color: "#000" }
                        }
                    >
                        <li className="active">
                            <a
                                onClick={() => setToggleModal(!toggleModal)}
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setToggleModal(!toggleModal)}
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setToggleModal(!toggleModal)}
                                href="#experience"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setToggleModal(!toggleModal)}
                                href="#project"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setToggleModal(!toggleModal)}
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
