import React from "react";
import "./Home.css";
import avatar from "../../assets/avatar.jpg";
import Navbar from "../Navbar/Navbar";
import Button from "../../components/Button";
import {
    FaFacebook,
    FaGooglePlusSquare,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const Home = () => {
    return (
        <div className="home" id="#">
            <div className="home-container">
                <Navbar />
                <div className="home-content">
                    <div className="content-left__socials menu-left--mobile">
                        <a
                            href="https://www.facebook.com/helianthusanuus1003"
                            target="_blank"
                        >
                            <FaFacebook className="socials-icon" />
                        </a>
                        <a href="#" target="_blank">
                            <FaGooglePlusSquare className="socials-icon" />
                        </a>
                        <a href="#" target="_blank">
                            <FaInstagram className="socials-icon" />
                        </a>
                        <a href="#" target="_blank">
                            <FaYoutube className="socials-icon" />
                        </a>
                    </div>
                    <div className="home-content__left">
                        <div className="content-left__socials">
                            <a
                                href="https://www.facebook.com/helianthusanuus1003"
                                target="_blank"
                            >
                                <FaFacebook className="socials-icon" />
                            </a>
                            <a href="#" target="_blank">
                                <FaGooglePlusSquare className="socials-icon" />
                            </a>
                            <a href="#" target="_blank">
                                <FaInstagram className="socials-icon" />
                            </a>
                            <a href="#" target="_blank">
                                <FaYoutube className="socials-icon" />
                            </a>
                        </div>
                        <p className="content-left__name">
                            Hello, I'm <span>Duy</span>
                        </p>
                        <p className="content-left__title">
                            Front End Developer
                        </p>
                        <p className="content-left__desc">
                            Resolving design problems, building smart user
                            interfaces and userful interactions, developing rich
                            web applications and seamless web expriences.
                        </p>
                        <div className="content-buttons">
                            <Button
                                text={"Hire Me"}
                                outline={true}
                                width={180}
                            />
                            <Button
                                text={"Get CV"}
                                primary={true}
                                width={180}
                            />
                        </div>
                    </div>
                    <div className="home-content__right">
                        <img src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
