import "./Home.css";
import avatar from "../../assets/avatar.jpg";
import Navbar from "../Navbar/Navbar";
import Button from "../../components/Button/Button";
import {
    FaFacebook,
    FaGooglePlusSquare,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home" id="#">
            <div className="home-container">
                <Navbar />
                <div className="home-content">
                    <div className="content-left__socials menu-left--mobile">
                        <a
                            href="https://www.facebook.com/helianthusanuus1003"
                            target="_blank"
                            rel="noreferrer"
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
                                rel="noreferrer"
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
                            {t("bannerContent.hello")}
                        </p>
                        <p className="content-left__title">
                            {t("bannerContent.job")}
                        </p>
                        <p className="content-left__desc">
                            {t("bannerContent.desc")}
                        </p>
                        <div className="content-buttons">
                            <Button
                                text={t("bannerContent.button1")}
                                outline={true}
                                width={180}
                            />
                            <Button
                                text={t("bannerContent.button2")}
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
