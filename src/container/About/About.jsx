import "./About.css";
import Title from "../../components/Title";
import avatar from "../../assets/avatar.jpg";
import { MdCastForEducation, MdWorkspacePremium } from "react-icons/md";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about" id="about">
            <Title
                title={t("about.titleSection.title")}
                desc={t("about.titleSection.desc")}
            />
            \
            <div className="about-container">
                <div className="about-img">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="about-right">
                    <div className="about-group">
                        <div className="about-item">
                            <MdWorkspacePremium className="about-item__icon" />
                            <p className="about-item__title">
                                {t("about.experience.title")}
                            </p>
                            <p className="about-item__desc">
                                {t("about.experience.content")}
                            </p>
                        </div>
                        <div className="about-item">
                            <MdCastForEducation className="about-item__icon" />
                            <p className="about-item__title">
                                {t("about.education.title")}
                            </p>
                            <p className="about-item__desc">
                                {t("about.education.content")}
                            </p>
                        </div>
                    </div>
                    <p className="about-right__content">
                        {t("about.description")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
