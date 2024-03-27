import { useState, useEffect } from "react";

import Home from "../../container/Home/Home";
import About from "../../container/About/About";
import Contact from "../../container/Contact/Contact";
import Experience from "../../container/Experience/Experience";
import Footer from "../../container/Footer/Footer";
import Projects from "../../container/Projects/Projects";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./HomePage.css";

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Tạo hiệu ứng cuộn mượt
        });
    };

    return (
        <div className="home-container">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />

            {isVisible && (
                <div className="scrolltop" onClick={scrollToTop}>
                    <BsFillArrowUpSquareFill className="scrolltop-icon" />
                </div>
            )}
        </div>
    );
};

export default HomePage;
