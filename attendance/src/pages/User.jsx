import { Field, Formik, Form } from "formik"
import './form.css';
import * as Yup from 'yup'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";


const Yupschema = Yup.object().shape({
    Userid: Yup.string().required("It is a required field"),
    Password: Yup.string().required("It is a required field"),
})
const User = () =>{ 

    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState([])


    return(
        <div>
            <Formik
                initialValues={{
                    Userid:"",
                    Password :"",
                }}
                onSubmit={(values, { resetForm }) => {
                    setFormInput((prev) => [...prev, values]); 
                    alert(JSON.stringify(values, null, 2));
                    console.log(values);
                    dispatch(setUsers([...formInput, values])); 
                    resetForm();
                }}
                
                validationSchema={Yupschema}
            >
                {({errors, touched}) =>(
                    <Form>
                        <label htmlFor="Userid">User ID</label>
                        <Field
                            id="Userid"
                            type="text"
                            name="Userid"
                            placeholder="Enter your User ID"
                    
                        />
                        {errors.Userid && touched.Userid &&(
                            <div className="error">{errors.Userid}</div>
                        ) }

                        <label htmlFor="Password">Password</label>
                        <Field
                            id="Password"
                            type="text"
                            name="Password"
                            placeholder="Enter your Password"

                        />
                        {errors.Password && touched.Password &&(
                            <div className="error">{errors.Password}</div>
                        )}

                        <button type="submit">ADD</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
export default User;