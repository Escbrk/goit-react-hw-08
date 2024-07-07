import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
// import * as React from "react";
// import Button from "@mui/material/Button";

const Login = () => {
  return (
    <>
      <LoginForm />
      {/* <Button variant="contained"> */}
        <Link to="/register">Or register</Link>
      {/* </Button> */}
    </>
  );
};

export default Login;
