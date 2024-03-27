import axios from "../axios";

export const getProjects = () =>
    axios({
        url: "/project",
        method: "GET",
    });
