import React from "react";
import "./index.css";
import Projects from "./Projects/Projects";
import { MdDashboard } from "react-icons/md";
import { TiNews } from "react-icons/ti";
import avatar from "../../assets/avatar.jpg";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar__head">
                    <h1>My-CV</h1>
                </div>
                <ul className="dashboard-sidebar__lists">
                    <li className="">
                        <MdDashboard className="dashboard-sidebar__lists-icon" />
                        <h3>Dashboard</h3>
                    </li>
                    <li className="active">
                        <TiNews className="dashboard-sidebar__lists-icon" />
                        <h3>Projects</h3>
                    </li>
                </ul>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <div className="dashboard-header__profile">
                        <img src={avatar} alt="Avatar" />
                        <h3>Quoc Duy</h3>
                    </div>
                </div>
                <Projects />
            </div>
        </div>
    );
};

export default Dashboard;
