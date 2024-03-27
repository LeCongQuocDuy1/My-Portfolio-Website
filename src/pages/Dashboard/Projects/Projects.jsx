import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Table, Button, Space } from "antd";
import { getProjects } from "../../../apis/";
import {
    SearchOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

const columns = [
    {
        title: "Thumbnail",
        dataIndex: "thumbnail",
        key: "thumbnail",
        render: (thumbnail) => (
            <img
                src={thumbnail}
                alt="Thumbnail"
                className="project-thumbnail"
            />
        ),
        className: "project-column",
    },
    {
        title: "Title",
        dataIndex: "title",
        key: "title",
        filters: [
            {
                text: "Du an 1",
                value: "duan1",
            },
            {
                text: "Du an 2",
                value: "duan2",
            },
        ],
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Techlonogy",
        dataIndex: "technology",
        key: "technology",
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <Button
                    type="primary"
                    style={{ backgroundColor: "#3398d4", color: "#000" }}
                    className="project-btn"
                    icon={<EditOutlined />}
                >
                    <a>Update</a>
                </Button>
                <Button
                    type="primary"
                    danger
                    style={{ color: "#000" }}
                    className="project-btn"
                    icon={<DeleteOutlined />}
                >
                    <a>Delete</a>
                </Button>
            </Space>
        ),
    },
];

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getProjects();
            setProjects(response.response);
            console.log(response);
        }
        fetchData();
    }, []);

    return (
        <div className="projects">
            <div className="projects-head">
                <h3>Manager Projects</h3>
                <Button
                    type="primary"
                    style={{ color: "#000", backgroundColor: "#7bd34f" }}
                    className="project-btn"
                    icon={<PlusOutlined />}
                >
                    <a>Create new project</a>
                </Button>
            </div>
            <Table dataSource={projects} columns={columns} />
        </div>
    );
};

export default Projects;
