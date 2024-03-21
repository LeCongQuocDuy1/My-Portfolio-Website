import { useContext, useState } from "react";
import "./Navbar.css";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeContext } from "../../App";
import en from "../../../public/en.png";
import vn from "../../../public/vn.png";
const Navbar = () => {
    const { theme, handleChangeTheme } = useContext(ThemeContext);
    const [toggleModal, setToggleModal] = useState(false);
    // const [isSwitchLang, setIsSwitchLang] = useState(false);

    return (
        <nav className="navbar-container">
            <a href="#" className="navbar-logo">
                Quoc Duy
            </a>
            <div className="navbar-right">
                <ul
                    className="navbar-lists"
                    style={
                        theme === "dark" ? { color: "#fff" } : { color: "#000" }
                    }
                >
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="navbar-languages">
                    <img
                        src={en}
                        alt=""
                        className="navbar-languages__icon navbar-languages__icon--en"
                    />
                    {/* <img
                        src={vn}
                        alt=""
                        className="navbar-languages__icon navbar-languages__icon--vn"
                    /> */}
                    <div className="navbar-languages__dropdown">
                        <div className="navbar-languages__items">
                            <img
                                src={en}
                                alt="English"
                                className="navbar-languages__dropdown-icon"
                            />
                            <p className="navbar-languages__text">English</p>
                        </div>
                        <div className="navbar-languages__items">
                            <img
                                src={vn}
                                alt="Việt Nam"
                                className="navbar-languages__dropdown-icon"
                            />
                            <p className="navbar-languages__text">Tiếng Việt</p>
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
