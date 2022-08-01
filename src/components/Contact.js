import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="flex w-full min-h-screen jusfity-center items-center">
      <div class="flex flex-colo md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-indigo-600 w-full max-w-4xl p-8 rounded-xl shadow-lq text-white">
        <div class="flex flex-col justify-between">
          <div>
            <h1 class="font-bold text-4xl tracking-wide">Contact Me</h1>
            <p class="pt-2 text-cyan-100 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo facilis repellat ab cupiditate alias vero aliquid
              obcaecati quisquam fuga dolore.
            </p>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600">
            <form
              class="flex flex-col space-y-4"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div>
                <label class="text-sm" htmlFor="name">
                  Name:
                </label>
                <input
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div>
                <label class="text-sm" htmlFor="email">
                  Email address:
                </label>
                <input
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>

              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button
                class="inline-block bg-indigo-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                data-testid="button"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
