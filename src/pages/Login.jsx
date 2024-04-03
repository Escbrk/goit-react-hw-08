import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
      }}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
