import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import "./Contact.css";
import {
    BsFillEnvelopeAtFill,
    BsMessenger,
    BsArrowRightShort,
    BsSend,
} from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="contact" id="contact">
            <Title
                title={t("contact.titleSection.title")}
                desc={t("contact.titleSection.desc")}
            />
            <div className="contact-container">
                <div className="contact-left">
                    <h3 className="contact-title">
                        {t("contact.sections.title1")}
                    </h3>
                    <div className="contact-item">
                        <BsFillEnvelopeAtFill className="contact-item__icon" />
                        <p className="contact-item__name">Email</p>
                        <p className="contact-item__desc">duy9117@gmail.com</p>
                        <a
                            href="https://workspace.google.com/products/chat/?utm_source=google&utm_medium=cpc&utm_campaign=1605214-Workspace-APAC-VN-en-BKWS-EXA-Gmail-DesknTab&utm_content=text-ad-none-none-DEV_c-CRE_629112581446-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt_Gmail_1-KWID_43700073752523553-aud-1644542956068:kwd-335417007&userloc_9040350-network_g&utm_term=KW_google%20gmail&gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJitkWKoh753lLuqpnjJaAtR565m7ZEKnalOThUA4myJ3QCRr_opHQaAo0WEALw_wcB&gclsrc=aw.ds"
                            className="contact-item__link"
                        >
                            {t("contact.sections.buttonArrow")}
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-item__icon" />
                        <p className="contact-item__name">
                            {t("contact.sections.phone")}
                        </p>
                        <p className="contact-item__desc">+84 086-773-5213</p>
                        <a href="#" className="contact-item__link">
                            {t("contact.sections.buttonArrow")}
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <BsMessenger className="contact-item__icon" />
                        <p className="contact-item__name">
                            {t("contact.sections.messenger")}
                        </p>
                        <p className="contact-item__desc">@lecongquocduy</p>
                        <a
                            href="https://www.facebook.com/lecongquocduy/"
                            className="contact-item__link"
                        >
                            {t("contact.sections.buttonArrow")}
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <h3 className="contact-title">
                        {t("contact.sections.title2")}
                    </h3>
                    <form>
                        <Input
                            label={t("contact.sections.name")}
                            type="text"
                            placeText={t("contact.sections.placeHolderName")}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeText={t("contact.sections.placeHolderEmail")}
                        />
                        <TextArea
                            label={t("contact.sections.message")}
                            placeText={t("contact.sections.placeHolderMess")}
                        />
                        <Button
                            text={t("contact.sections.buttonSend")}
                            icon={<BsSend className="contact-btn" />}
                            primary={true}
                            width={180}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
