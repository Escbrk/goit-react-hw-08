import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
      }}
    >
      <Form>
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default Register;
