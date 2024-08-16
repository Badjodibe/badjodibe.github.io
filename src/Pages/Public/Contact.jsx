import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { data } from 'autoprefixer';

const validationSchema = Yup.object({
    subject : Yup.string()
    .min(5, "Character must be greater than 5")
    .required("Required"),
    email : Yup.string()
    .email("Ivalide mail adress")
    .required("Required"),
    content : Yup.string()
    .min(200, "Character must be greater than 200")
    .required("Required"),
    name : Yup.string()
    .min(3, "Character must be greater than 3")
});

const Contact = () =>{
    const formik = useFormik({
        initialValues : {
            subject: '',
            email: '',
            content: '',
            name: ''
        },
        validationSchema : validationSchema,
        onSubmit: values =>{

        }
    }) 
};
const handleSubmit = data => {
    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      });
      instance({
            method : 'post',
            url : 'jla',
            data : data
        }
      )
    .catch(function (errors) {
        
    })
}
return(
    <div>
        <div>
            Je saurais comment vous aidez,a isla  oskjdlnf 
            slkkflsa
        </div>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div>
                    <input
                            id="subject"
                            name="subject"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subject}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <span>{formik.errors.subject}</span>
                        ) : null}
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                    <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <span>{formik.errors.name}</span>
                        ) : null}
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                    <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <span>{formik.errors.email}</span>
                        ) : null}
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="content">Message</label>
                    </div>
                    <div>
                    <input
                            id="content"
                            name="content"
                            type="textarea"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.content}
                        />
                        {formik.touched.content && formik.errors.content ? (
                            <span>{formik.errors.content}</span>
                        ) : null}
                    </div>
                </div>
            </form>
        </div>
    </div>
    
)
