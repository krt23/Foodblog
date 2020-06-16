import React from "react";
import contact from "../../images/blog-contact.jpg";
import { MOCK_DATA } from "../../api/MOCK_DATA";
import "./style.scss";

export default function ContactUs() {
  return (
    <div className="mb-5">
      <div className="contacts">
        <img src={contact} alt="contact" />
        <h1 className="contactsHeader">Contact Us</h1>
      </div>
      <br />
      <div className="container text-center text-muted">
        <h5>CORPORATE ADDRESS</h5>
        <p className="contactsText">{MOCK_DATA.CONTACTS.address.corporateAddress}</p>
        <h5>The Shop Address</h5>
        <p className="contactsText">{MOCK_DATA.CONTACTS.address.theShopAddress}</p>
        <h5>{MOCK_DATA.CONTACTS.help.text}</h5>
        <p className="contactsText">
          {" "}
          <span>
            {" "}
            <i className="fa fa-envelope"></i>{" "}
          </span>
          {MOCK_DATA.CONTACTS.help.email}
        </p>
      </div>
    </div>
  );
}
