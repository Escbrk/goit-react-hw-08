import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addContact } from "../../../redux/contacts/operations";

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("This field is required"),
  });

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values))
          .unwrap()
          .then(() => toast.success("Added"))
          .catch((e) => toast.error(e));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
