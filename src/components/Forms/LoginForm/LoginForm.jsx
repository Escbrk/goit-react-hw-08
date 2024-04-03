import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = () =>
    Yup.object().shape({
      email: Yup.string().required("This field is required"),
      password: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("This field is required"),
    });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values))
          .unwrap()
          .then(() => toast.success("You're logged in!"))
          .catch(() => toast.error("Error, pls try again!"));
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
