import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <LoginForm />
      <p>
        Or &#9;
        <Link to="/register">register</Link>
      </p>
    </>
  );
};

export default Login;
