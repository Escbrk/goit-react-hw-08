import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
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
  const nameFieldId = useId();
  const numberFieldId = useId();
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
      <Form className={css.container}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="number" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
