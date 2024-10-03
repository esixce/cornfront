import React from "react";
import "./Contact.css";
import ContactForm from "../../src/components/ContactForm";

const Contact = () => {
  const imageUrl = process.env.PUBLIC_URL + '/assets/images/img01.jpg';

  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="backimg page-content" style={styles}>
      <ContactForm />
    </div>
  );};

export default Contact;
