import "./Experience.css";
import Title from "../../components/Title/Title";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();
    return (
        <div className="experience" id="experience">
            <Title
                title={t("experience.titleSection.title")}
                desc={t("experience.titleSection.desc")}
            />
            <div className="exp-container">
                <div className="exp-group">
                    <h3 className="exp-title">{t("experience.frontTitle")}</h3>
                    <div className="exp-row">
                        <div className="exp-col">
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">HTML / CSS</p>
                                    <p className="exp-status">
                                        {t("experience.experienced")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">Boostrap</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">Javascript</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="exp-col">
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">Tailwindcss</p>
                                    <p className="exp-status">
                                        {t("experience.experienced")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">ReactJS</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">TypeScript</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exp-group">
                    <h3 className="exp-title">{t("experience.backTitle")}</h3>
                    <div className="exp-row">
                        <div className="exp-col">
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">MySQL</p>
                                    <p className="exp-status">
                                        {t("experience.experienced")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">MongoDB</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">NodeJS</p>
                                    <p className="exp-status">
                                        {t("experience.intermediate")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="exp-col">
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">ExpressJS</p>
                                    <p className="exp-status">
                                        {t("experience.experienced")}
                                    </p>
                                </div>
                            </div>
                            <div className="exp-item">
                                <BsCheckCircleFill className="exp-icon" />
                                <div className="exp-texts">
                                    <p className="exp-name">Firebase</p>
                                    <p className="exp-status">
                                        {t("experience.basic")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
