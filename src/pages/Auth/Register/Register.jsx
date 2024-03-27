import FormElement from "../../../components/Form/Form";
import "./Register.css";

const Register = () => {
    return (
        <div className="register-container">
            <FormElement isLogin={false} />
        </div>
    );
};

export default Register;
