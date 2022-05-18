import React, { useState } from "react";

import { AppWrap, AnimationWrap } from "../../wrapper";
import { client } from "../../client";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, subject, email, message } = formData;

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "messages",
      name: name,
      subject: subject,
      email: email,
      message: message,
    };

    async function createContact() {
      try {
        client.create(contact);
        setLoading(false);
        setFormSubmitted(true);
      } catch (error) {
        return error;
      }
    }

    createContact();
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <>
      {!formSubmitted ? (
        <>
          <h2 className="section-header-text">Get in touch!</h2>
          <div className="app__contact-form">
            <div className="app__flex">
              <input
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="text"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="app__contact-form-button"
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        </>
      ) : (
        <div className="app__contact-success-message">
          <h2 className="section-header-text">Thanks!</h2>
          <h3 className="head-text">
            I appreciate you writing to me. I'll be in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(AnimationWrap(Contact, "app__contact"), "contact");
