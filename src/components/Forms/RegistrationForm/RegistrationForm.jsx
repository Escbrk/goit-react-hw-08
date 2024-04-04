import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
import "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("This field is required"),
      email: Yup.string().required("This field is required"),
      password: Yup.string()
        .min(3, "Too Short!")
        .max(15, "Too Long!")
        .required("This field is required"),
    });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values))
          .unwrap()
          .then(() => toast.success("You're registered!"))
          .catch(() => toast.error("Error, pls try again!"));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
