import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.9",
    color: "white",
    paddingBottom: "50px",
  },
  formStyle: {
    margin: "10px 0",
  },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email is invalid");
      return;
    }
    alert(`Hello ${name}`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="card" style={styles.cardBodyStyle}>
      <h4 className="card-header">Contact Me {name}</h4>
      <form className="form card-body">
        <input
          style={styles.formStyle}
          className="form-control"
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
          value={name}
        />
        <input
          style={styles.formStyle}
          className="form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          value={email}
        />
        <textarea
          style={styles.formStyle}
          className="form-control"
          name="message"
          onChange={handleInputChange}
          value={message}
          placeholder="Message"
          rows="5"
        />
        <button
          style={styles.formStyle}
          className="btn btn-secondary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </div>
  );
}

export default Contact;
