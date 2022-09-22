import React from 'react';
import PropTypes from 'prop-types';

import './EditUserPage.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const EditUserPage = (props) => {

    const UserSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'too short').required('  Enter your first name'),
        lastName: Yup.string().min(2, 'too short').required('  Enter your last name'),
        email: Yup.string().email('Invalid email').required('  Enter your email'),
        address: Yup.string().required(' Enter your address'),
        dob: Yup.date().required("  Choose your birthday"),
        phoneNumber: Yup.string().required('  Enter your phone'),
    })
    return (
        <div className="col-4 editUser">
            <h1 className='mt-5 mb-5'>Edit user</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', address: '', dob: null, phoneNumber: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 200);
                }}
                validationSchema={UserSchema}
            >
                {({ errors, touched }) => (
                    <Form className="col-12">
                        <div className="mb-2">
                            <Field
                                name="firstName"
                                className="form-control radius"
                                type="text"
                                placeholder="firstName"
                            />
                            <ErrorMessage component="p" className="text-danger error-input " name="firstName" />
                        </div>
                        <div className="mb-2">
                            <Field name="lastName" className="form-control radius" type="text" placeholder="lastName" />
                            <ErrorMessage component="p" className="text-danger error-input " name="lastName" />
                        </div>
                        <div className="mb-2">
                            <Field name="email" className="form-control radius" type="email" placeholder="Email" />
                            <ErrorMessage component="p" className="text-danger error-input " name="email" />
                        </div>
                        <div className="mb-2">
                            <Field name="address" className="form-control radius" type="text" placeholder="address" />
                            <ErrorMessage component="p" className="text-danger error-input " name="address" />
                        </div>
                        <div className="mb-2">
                            <Field name="dob" className="form-control radius" type="date" placeholder="dob" />
                            <ErrorMessage component="p" className="text-danger error-input " name="dob" />
                        </div>
                        <div className="mb-2">
                            <Field
                                name="phoneNumber"
                                className="form-control radius"
                                type="tel"
                                placeholder="phoneNumber"
                            />
                            <ErrorMessage component="p" className="text-danger error-input " name="phoneNumber" />
                        </div>
                        <button className=" mt-5 btn btn-submit col-12 d-flex justify-content-center" type="submit">
                            Save
                        </button>
                      
                    </Form>
                )}
            </Formik>
            <Link to='/user' ><button className='btn'>Return</button></Link>
        </div>
    );
};

EditUserPage.propTypes = {};

export default EditUserPage;
