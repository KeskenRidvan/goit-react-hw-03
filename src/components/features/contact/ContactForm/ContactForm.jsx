import styles from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Format must be 000-00-00")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const { contactForm, contactForm__input, contactForm__button } = styles;

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleContactFormSubmit = (values, actions) => {
    addContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={handleContactFormSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className={contactForm}>
          <div className={contactForm__input}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={contactForm__input}>
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId} />
            <ErrorMessage name="number" component="span" />
          </div>

          <button
            className={contactForm__button}
            type="submit"
            disabled={!dirty || !isValid}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
