import {
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./Contact.module.css";

export async function contactAction({ request }) {
  const formData = await request.formData();

  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    }
  );

  if (!response.ok) {
    return {
      success: false,
      message: "Failed to send your message.",
    };
  }

  const data = await response.json();

  return {
    success: true,
    message: data.message,
  };
}

export default function Contact() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <section id="contact" className={classes.contact}>
      <h2>Contact</h2>

      <Form method="post">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {actionData && (
          <p>{actionData.message}</p>
        )}
      </Form>
    </section>
  );
}