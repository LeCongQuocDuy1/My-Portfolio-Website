import Home from "./container/Home/Home";
import About from "./container/About/About";
import "./App.css";
import { createContext, useState } from "react";
import Experience from "./container/Experience/Experience";
import Projects from "./container/Projects/Projects";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Contact from "./container/Contact/Contact";
import Footer from "./container/Footer/Footer";

export const ThemeContext = createContext();
function App() {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = () => {
        if (theme) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };
    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            <div
                className="app"
                style={
                    theme === "dark"
                        ? { backgroundColor: "#000", color: "#fff" }
                        : { backgroundColor: "#fff", color: "#000" }
                }
            >
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
                <a href="#" className="scrolltop">
                    <BsFillArrowUpSquareFill className="scrolltop-icon" />
                </a>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
