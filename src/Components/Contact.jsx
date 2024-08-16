import { SERVER } from "../Config/Config";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css'

const validate = values =>{
    const errors = {};
    if(!values.subject){
        errors.subject = "Required";
    }else if(values.subject.length < 5){
        errors.subject = "Must be greather than 5 character"
    }
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.message){
        errors.message = "Required";
    }else if(values.message.length < 10){
        errors.message = "Must be greather than 200 character"
    }

    return errors;
};

// Contact form component

const ContactForm = () => {
    const formik = useFormik(
        {
            initialValues : {
                subject : '',
                category : '',
                email : '',
                message : ' '
            },
            validate,
            onSubmit : async (values) => {
                try{
                    const API = SERVER +  "api/contacts";
                    const response = await axios.post(
                        API,
                        values, // Data to be send
                        {
                          headers: {
                            "Content-Type": "application/json", // Indicate that the content type is json
                          },
                        }
                      );
                      console.log(response.data);
                      alert("Data successfully send !");
                      formik.resetForm(); 
                }
                catch(error){
                    console.error("Error submitting form:", error);
                    alert("Une erreur s'est produite lors de l'envoi du message.");
                }
            }
        }
    );
    return (
        <div>

            <div className="contactForm">
                <form onSubmit={formik.handleSubmit}>
                    <div className="displayData">
                        <div className="contactInput" >
                            <label id="labelContact" htmlFor="subject">Subject:</label>
                            <input
                                placeholder="Entrer the Object"
                                id="input"
                                name="subject"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.subject}
                            />
                        </div>
                        {formik.errors.subject ? <div className="contactError">{formik.errors.subject}</div> : null}
                    </div>
                    <div className="displayData">
                        <div className="contactInput">
                            <label id="labelContact" htmlFor="category">Category:</label>
                            <select
                            id="input"
                            name="category"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                            >
                            <option value="" label="Select a category" />
                            <option value="general" label="General" />
                            <option value="support" label="Support" />
                            <option value="feedback" label="Feedback" />
                            </select>
                        </div>
                        {formik.errors.category ? <div className="contactError">{formik.errors.category}</div> : null}
                    </div>
                    <div className="displayData">
                        <div className="contactInput">
                            <label id="labelContact" htmlFor="email">Email:</label>
                            <input
                                placeholder="email"
                                id="input"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        {formik.errors.email ? <div className="contactError">{formik.errors.email}</div> : null}
                    </div>
                    <div className="displayData">
                        <div className="contactInput" >
                            <label id="labelContact" htmlFor="message">Message:</label>
                            <input
                                placeholder="Enter your message"
                                id="input"
                                name="message"
                                type="textarea"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                        </div>
                        {formik.errors.message ? <div className="contactError">{formik.errors.message}</div> : null}
                    </div>

                    <div id="submitContact">
                        <div> <button  type="submit">Submit</button> </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
