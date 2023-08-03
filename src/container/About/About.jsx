import React from "react";
import "./About.css";
import Title from "../../components/Title";
import avatar from "../../assets/avatar.jpg";
import { MdCastForEducation, MdWorkspacePremium } from "react-icons/md";

const About = () => {
    return (
        <div className="about" id="about">
            <Title title="About Me" desc="Get To Know More" />\
            <div className="about-container">
                <div className="about-img">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="about-right">
                    <div className="about-group">
                        <div className="about-item">
                            <MdWorkspacePremium className="about-item__icon" />
                            <p className="about-item__title">Experience</p>
                            <p className="about-item__desc">
                                2+ years of experience in Web programming
                            </p>
                        </div>
                        <div className="about-item">
                            <MdCastForEducation className="about-item__icon" />
                            <p className="about-item__title">Education</p>
                            <p className="about-item__desc">
                                Graduated from Phu Xuan University, majoring in
                                information technology
                            </p>
                        </div>
                    </div>
                    <p className="about-right__content">
                        I have a solid knowledge base of HTML/CSS and Javascript
                        ES5/ES6, ReactJS and Nodejs. The position I want to
                        apply for is Frontend Developer or maybe React Developer
                        if that is a necessity. I look forward to working in a
                        dynamic and young environment. I always want to
                        contribute my personal values to help the company grow.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
