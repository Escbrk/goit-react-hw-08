import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import css from './Login.module.css'

const Login = () => {
  return (
    <>
      <LoginForm />
      <p>
        Or &#9;
        <Link className={css.link} to="/register">register</Link>
      </p>
    </>
  );
};

export default Login;
