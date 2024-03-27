import "./App.css";
import { createContext, useState } from "react";
import HomePage from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Dashboard from "./pages/Dashboard/";
import "../theme.less";
import { ConfigProvider } from "antd";
export const ThemeContext = createContext();
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = () => {
        if (theme) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#fd8d14",
                },
            }}
        >
            <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
                <div
                    className="app"
                    style={
                        theme === "dark"
                            ? { backgroundColor: "#000", color: "#fff" }
                            : { backgroundColor: "#fff", color: "#000" }
                    }
                >
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/*" element={<HomePage />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </ThemeContext.Provider>
        </ConfigProvider>
    );
}

export default App;
