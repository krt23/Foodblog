import React from "react";
import contact from "../../images/blog-contact.jpg";
import "./style.scss";

export default function ContactUs() {
  return (
    <div className="contacts">
      <img src={contact} alt="contact" />
      <h1 className="contactsHeader">Contact Us</h1>
    </div>
  );
}