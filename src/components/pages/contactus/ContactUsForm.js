import React from "react";
import "./ContactUsForm.css";

const ContactUsForm = () => {
  const contactUsSubmithandler = async(e) => {
    e.preventDefault();
    // console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    const contactDataObj = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
    };
    // console.log(contactDataObj);
    const response = await fetch("https://e-commerce-contact-us-default-rtdb.firebaseio.com/contact-us.json", {
        method: 'POST',
        body: JSON.stringify(contactDataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const formData = await response.json()
    console.log(formData);
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
  };

  return (
    <>
      <form onSubmit={contactUsSubmithandler} className="conatact-us-form">
        <label className="label-contactus-inputs">Name</label>
        <input className="input-fiels-contact-us" />
        <label className="label-contactus-inputs">email Id</label>
        <input type="email" className="input-fiels-contact-us" />
        <label className="label-contactus-inputs">phone number</label>
        <input type="number" className="input-fiels-contact-us" />
        <button className="contactus-submit-btn">Submit</button>
      </form>
    </>
  );
};

export default ContactUsForm;
