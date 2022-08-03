import "./Contact.css";
import React from "react";

function Contact() {
  const [contactInfo, setContactInfo] = React.useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newContactInfo = {
      ...contactInfo,
      [inputName]: inputValue,
    };
    setContactInfo(newContactInfo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleReset = () => {
    setContactInfo({ firstName: "", lastName: "", message: "" });
    console.log(contactInfo);
  };

  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <form className="form-container" onReset={handleReset}>
        <div className="contact-names">
          <input
            className="contact-first-name"
            type="text"
            name="firstName"
            placeholder="First name"
            value={contactInfo.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="contact-last-name"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={contactInfo.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="contact-message"
          name="message"
          placeholder="Message"
          value={contactInfo.message}
          onChange={handleChange}
          required
        />
        <div className="contact-btn">
          <input className="contact-reset" type="reset" value="Reset" />
          <input
            className="contact-submit"
            type="submit"
            value="Submit"
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
export default Contact;
