import React, { useState } from 'react';
import { Table } from '@mantine/core';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import './form.css';

const Yupschema = Yup.object().shape({
    firstname: Yup.string().required("Enter First Name"),
    lastname: Yup.string().required("Enter Last Name"),
    mobile: Yup.string().matches(/^\d{10}$/).required("Enter 10 digit number"),
    age: Yup.number().min(18, "Min 18 years old").required(),
    email: Yup.string().email().required(),
    gender: Yup.string().required(),
    state: Yup.string().required(),
    edu: Yup.array().min(1, "Select at least one option").of(Yup.string()).required("Select your Education"),
    terms: Yup.boolean().oneOf([true], "Must accept the terms")
});

const stateOptions = ["TamilNadu", "Kerala", "Andhra Pradesh", "Karnataka"];
const eduOptions = ["HSC", "SSLC", "UG", "PG"];

const Formik2 = () => {
    const [formValues, setFormValues] = useState({});
    const [showTable, setShowTable] = useState(false);

    return (
        <div>
            <h2 className="formhead">Basic Form</h2>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    mobile: "",
                    age: "",
                    email: "",
                    gender: "",
                    state: "",
                    edu: [],
                    terms: false,
                }}
                onSubmit={(values) => {
                    setFormValues(values);  // Store form values when submitted
                    alert(JSON.stringify(values, null, 2)); // Display in alert
                    setShowTable(true); // Show table after form submission
                }}
                validationSchema={Yupschema}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                        <label htmlFor="firstname">First Name</label>
                        <Field
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter your First Name"
                        />
                        {errors.firstname && touched.firstname && (
                            <div className="error">{errors.firstname}</div>
                        )}

                        <label htmlFor="lastname">Last Name</label>
                        <Field
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Enter your Last Name"
                        />
                        {errors.lastname && touched.lastname && (
                            <div className="error">{errors.lastname}</div>
                        )}

                        <label htmlFor="mobile">Mobile Number</label>
                        <Field
                            type="text"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter your Mobile Number"
                        />
                        {errors.mobile && touched.mobile && (
                            <div className="error">{errors.mobile}</div>
                        )}

                        <label htmlFor="age">Age</label>
                        <Field
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your Age"
                        />
                        {errors.age && touched.age && (
                            <div className="error">{errors.age}</div>
                        )}

                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        {errors.email && touched.email && (
                            <div className="error">{errors.email}</div>
                        )}

                        <label htmlFor="gender">Gender</label>
                        <div>
                            <Field
                                type="radio"
                                name="gender"
                                value="Male"
                            /> Male
                            <Field
                                type="radio"
                                name="gender"
                                value="Female"
                            /> Female
                            <Field
                                type="radio"
                                name="gender"
                                value="Other"
                            /> Other
                        </div>
                        {errors.gender && touched.gender && (
                            <div className="error">{errors.gender}</div>
                        )}

                        <label htmlFor="state">State</label>
                        <Field
                            as="select"
                            id="state"
                            name="state"
                        >
                            <option value="">Select State</option>
                            {stateOptions.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </Field>
                        {errors.state && touched.state && (
                            <div className="error">{errors.state}</div>
                        )}

                        <label>Education</label>
                        {eduOptions.map((edu, index) => (
                            <div key={index}>
                                <Field
                                    type="checkbox"
                                    name="edu"
                                    value={edu}
                                    onChange={() => {
                                        const newEdu = [...values.edu];
                                        if (newEdu.includes(edu)) {
                                            newEdu.splice(newEdu.indexOf(edu), 1);
                                        } else {
                                            newEdu.push(edu);
                                        }
                                        setFieldValue("edu", newEdu);
                                    }}
                                />
                                {edu}
                            </div>
                        ))}
                        {errors.edu && touched.edu && (
                            <div className="error">{errors.edu}</div>
                        )}

                        <label>
                            <Field
                                type="checkbox"
                                name="terms"
                            />
                            Accept Terms and Conditions
                        </label>
                        {errors.terms && touched.terms && (
                            <div className="error">{errors.terms}</div>
                        )}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            {/* Mantine Table to display the JSON data after submission */}
            {showTable && Object.keys(formValues).length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Submitted Form Data</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(formValues).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{Array.isArray(value) ? value.join(", ") : value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Formik2;
