import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values)).unwrap().then(() => toast.success('You\'re logged in!')).catch((e) => toast.error('Error, pls try again!'));
        actions.resetForm();
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

export default LoginForm;
