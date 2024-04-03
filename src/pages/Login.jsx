import { Link } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">Or register</Link>
    </>
  );
};

export default Login;
