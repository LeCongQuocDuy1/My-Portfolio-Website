import React from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import "./Contact.css";
import {
    BsFillEnvelopeAtFill,
    BsMessenger,
    BsArrowRightShort,
    BsSend,
} from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <Title title="Contact Me" desc="Contact with me" />
            <div className="contact-container">
                <div className="contact-left">
                    <h3 className="contact-title">Talk to me</h3>
                    <div className="contact-item">
                        <BsFillEnvelopeAtFill className="contact-item__icon" />
                        <p className="contact-item__name">Email</p>
                        <p className="contact-item__desc">duy9117@gmail.com</p>
                        <a
                            href="https://workspace.google.com/products/chat/?utm_source=google&utm_medium=cpc&utm_campaign=1605214-Workspace-APAC-VN-en-BKWS-EXA-Gmail-DesknTab&utm_content=text-ad-none-none-DEV_c-CRE_629112581446-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt_Gmail_1-KWID_43700073752523553-aud-1644542956068:kwd-335417007&userloc_9040350-network_g&utm_term=KW_google%20gmail&gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buJitkWKoh753lLuqpnjJaAtR565m7ZEKnalOThUA4myJ3QCRr_opHQaAo0WEALw_wcB&gclsrc=aw.ds"
                            className="contact-item__link"
                        >
                            Contact me
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-item__icon" />
                        <p className="contact-item__name">Phone</p>
                        <p className="contact-item__desc">+84 086-535-0416</p>
                        <a href="#" className="contact-item__link">
                            Contact me
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                    <div className="contact-item">
                        <BsMessenger className="contact-item__icon" />
                        <p className="contact-item__name">Messenger</p>
                        <p className="contact-item__desc">
                            @helianthusanuus1003
                        </p>
                        <a
                            href="https://www.facebook.com/helianthusanuus1003"
                            className="contact-item__link"
                        >
                            Contact me
                            <BsArrowRightShort className="contact-item__arrow" />
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <h3 className="contact-title">Write me your project</h3>
                    <form>
                        <Input
                            label="Name"
                            type="text"
                            placeText="Insert your name"
                        />
                        <Input
                            label="Mail"
                            type="email"
                            placeText="Insert your email"
                        />
                        <Input label="Name" type="text" />
                        <TextArea
                            label="Message"
                            placeText="Write your message"
                        />
                        <Button
                            text={"Send Message"}
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
