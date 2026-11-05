"use client";

import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaPaperPlane, FaRegUser } from "react-icons/fa";

const formEndpoint = process.env.NEXT_FORMSPREE_ENDPOINT;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required").max(100),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required")
    .max(254),
  message: Yup.string()
    .trim()
    .required("Message cannot be empty")
    .min(10, "Please add a little more detail")
    .max(4000, "Message must be 4,000 characters or fewer"),
});

const initialValues = { name: "", email: "", message: "" };

type ContactFormValues = typeof initialValues;

export default function ContactPage() {
  const handleSubmit = async (
    values: ContactFormValues,
    { setStatus, resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    if (!formEndpoint) {
      setStatus({
        error: "The contact form is temporarily unavailable. Please try again later.",
      });
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Contact service returned ${response.status}`);
      }

      resetForm();
      setStatus({ success: "Thanks for your message. I’ll be in touch." });
    } catch (error) {
      console.error("Unable to submit contact form:", error);
      setStatus({
        error:
          "Your message could not be sent. Please try again later.",
      });
    }
  };

  return (
    <Container className="py-5">
      <header className="page-heading mb-4">
        <p className="about-eyebrow mb-2">Contact</p>
        <h1 className="display-5 fw-bold mb-3">Let’s start a conversation</h1>
        <p className="lead text-muted mb-0">
          For software roles, project discussions, or technical collaboration,
          send me a message.
        </p>
      </header>

      <div
        className="card section-panel border-0 mx-auto p-3 p-md-4"
        style={{ maxWidth: "44rem" }}
      >
        {formEndpoint ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, isSubmitting, status }) => (
              <Form noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    <FaRegUser className="me-2" aria-hidden="true" />
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    className={`form-control p-3 ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={
                      touched.name && errors.name ? "name-error" : undefined
                    }
                  />
                  <ErrorMessage
                    component="div"
                    id="name-error"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <FaEnvelope className="me-2" aria-hidden="true" />
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    className={`form-control p-3 ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={
                      touched.email && errors.email ? "email-error" : undefined
                    }
                  />
                  <ErrorMessage
                    component="div"
                    id="email-error"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={4000}
                    className={`form-control p-3 ${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={
                      touched.message && errors.message
                        ? "message-error"
                        : undefined
                    }
                  />
                  <ErrorMessage
                    component="div"
                    id="message-error"
                    name="message"
                    className="invalid-feedback"
                  />
                </div>

                {status?.error && (
                  <p className="text-danger" role="alert">
                    {status.error}
                  </p>
                )}
                {status?.success && (
                  <p className="text-success" role="status">
                    {status.success}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="me-2" aria-hidden="true" />
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="text-muted" role="status">
            The contact form is temporarily unavailable. Please try again later.
          </div>
        )}
      </div>
    </Container>
  );
}
