import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import css from "./Login.module.css";

const Login = () => {
  return (
    <div className={css.container}>
      <LoginForm />
      <p>
        Or &#9;
        <Link className={css.link} to="/register">
          register
        </Link>
      </p>
    </div>
  );
};

export default Login;
