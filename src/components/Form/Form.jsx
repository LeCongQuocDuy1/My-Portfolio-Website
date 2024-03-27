import React, { useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    Form,
    Input,
    DatePicker,
    Select,
    message,
} from "antd";
import "./Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { apiLogin, apiRegister } from "../../apis/";
import { toast } from "react-toastify";

const FormElement = ({ isLogin }) => {
    const navigation = useNavigate();

    const [payload, setPayload] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
        birthDate: new Date(),
    });

    const handleDateChange = (date) => {
        setPayload((prev) => ({
            ...prev,
            birthDate: date,
        }));
    };

    const reset = () => {
        setPayload({
            username: "",
            email: "",
            phone: "",
            password: "",
            role: "user",
            birthDate: new Date(),
        });
    };

    const handleSubmit = async () => {
        const { email, password, ...newPayload } = payload;

        if (isLogin) {
            const response = await apiLogin({ email, password });
            if (response.status) {
                toast.success(response.message, {
                    autoClose: 1500,
                    onClose: () => {
                        navigation("/dashboard");
                    },
                });
            } else {
                toast.error(response.message);
            }
            reset();
        } else {
            const newBirthDay = `${payload.birthDate.$D}/${
                payload.birthDate.$M + 1
            }/${payload.birthDate.$y}`;
            payload.birthDate = newBirthDay;
            const response = await apiRegister(payload);
            if (response.status) {
                toast.success(response.message, {
                    autoClose: 1500,
                    onClose: () => {
                        navigation("/login");
                    },
                });
            } else {
                toast.error(response.message);
            }
            reset();
        }
    };

    return (
        <div>
            {isLogin ? (
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    className="form form-login"
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className="form-heading">
                        <h3>Login</h3>
                        <Link to={"/register"}>Don't have an account?</Link>
                    </div>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Email is required!",
                            },
                            {
                                type: "email",
                                message: "Must be a valid email",
                            },
                        ]}
                        style={{ marginBottom: "20px" }}
                    >
                        <Input
                            type="email"
                            placeholder="Enter email address"
                            style={{
                                marginBottom: "5px",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                            value={payload.email}
                            onChange={(e) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Password is required!",
                            },
                            {
                                min: 6,
                                message:
                                    "Password must be at least 6 characters",
                            },
                        ]}
                        style={{ marginBottom: "20px" }}
                    >
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                marginBottom: "5px",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                            value={payload.password}
                            onChange={(e) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>

                    <div className="form-flex">
                        <Checkbox>Keep me sign in</Checkbox>
                        <a href="/">Forgot Password?</a>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                                width: "100%",
                                borderRadius: "5px",
                            }}
                        >
                            Login
                        </Button>
                    </Form.Item>

                    <div className="form-loginwith">
                        <span>Login with</span>
                    </div>

                    <div className="form-options">
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Github
                        </Button>
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Google
                        </Button>
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Facebook
                        </Button>
                    </div>
                </Form>
            ) : (
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    className="form form-register"
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className="form-heading">
                        <h3>Sign up</h3>
                        <Link to={"/login"}>Already have an account?</Link>
                    </div>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Username is required!",
                            },
                        ]}
                        style={{ marginBottom: "20px" }}
                    >
                        <Input
                            type="text"
                            placeholder="Enter username"
                            style={{
                                marginBottom: "5px",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                            value={payload.username}
                            onChange={(e) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    username: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Email is required!",
                            },
                            {
                                type: "email",
                                message: "Must be a valid email",
                            },
                        ]}
                        style={{ marginBottom: "20px" }}
                    >
                        <Input
                            type="email"
                            placeholder="Enter email address"
                            style={{
                                marginBottom: "5px",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                            value={payload.email}
                            onChange={(e) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Password is required!",
                            },
                            {
                                min: 5,
                                message:
                                    "Must be at least 5 characters or more",
                            },
                        ]}
                        style={{ marginBottom: "20px" }}
                    >
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                marginBottom: "5px",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                            value={payload.password}
                            onChange={(e) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>

                    <div className="form-row">
                        <div className="form-col-6">
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Phone is required!",
                                    },
                                    {
                                        min: 10,
                                        message: "Invalid phone number",
                                    },
                                    {
                                        max: 10,
                                        message: "Invalid phone number",
                                    },
                                ]}
                                style={{ marginBottom: "20px" }}
                            >
                                <Input
                                    placeholder="Enter phone"
                                    style={{
                                        marginBottom: "5px",
                                        padding: "8px 12px",
                                        borderRadius: "5px",
                                    }}
                                    value={payload.phone}
                                    onChange={(e) =>
                                        setPayload((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))
                                    }
                                />
                            </Form.Item>
                        </div>
                        <div className="form-col-6">
                            <Form.Item
                                label="Birthdate"
                                name="birthdate"
                                rules={[
                                    {
                                        required: true,
                                        message: "Birthdate is required!",
                                    },
                                ]}
                                style={{ marginBottom: "20px" }}
                            >
                                <DatePicker
                                    placeholder="Enter birthdate"
                                    style={{
                                        marginBottom: "5px",
                                        padding: "8px 12px",
                                        borderRadius: "5px",
                                        width: "100%",
                                    }}
                                    value={payload.birthDate}
                                    onChange={handleDateChange}
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <Form.Item
                        label="Role"
                        name="role"
                        style={{ marginBottom: "20px" }}
                    >
                        <Select
                            defaultValue="user"
                            style={{
                                width: "100%",
                            }}
                            allowClear
                            options={[
                                {
                                    value: "user",
                                    label: "User role",
                                },
                                {
                                    value: "admin",
                                    label: "Admin role",
                                },
                            ]}
                            value={payload.role}
                            onChange={(value) =>
                                setPayload((prev) => ({
                                    ...prev,
                                    role: value,
                                }))
                            }
                        />
                    </Form.Item>

                    <div className="form-flex">
                        <Checkbox>Keep me sign in</Checkbox>
                        <a href="/">Forgot Password?</a>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                                width: "100%",
                                borderRadius: "5px",
                            }}
                        >
                            Create Account
                        </Button>
                    </Form.Item>

                    <div className="form-loginwith">
                        <span>Sign up with</span>
                    </div>

                    <div className="form-options">
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Github
                        </Button>
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Google
                        </Button>
                        <Button
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            }
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            Facebook
                        </Button>
                    </div>
                </Form>
            )}
        </div>
    );
};
export default FormElement;
