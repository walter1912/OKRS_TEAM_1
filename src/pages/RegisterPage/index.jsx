import React from 'react';
import PropTypes from 'prop-types';

// router
import { Link } from 'react-router-dom';

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// assets
import { Icon, Img } from '~/assets/constants.js';
// css
import './RegisterPage.scss';

const RegisterPage = (props) => {
    // validate

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too short').required('   Enter your firstName'),
        email: Yup.string().email('Invalid email').required('   Enter your email'),
        lastName: Yup.string().min(2, 'Too short').required('   Enter your lastName'),
        password: Yup.string().min(6, 'Weak password').required('   Enter your password'),
    });

    return (
        <div className="container row register">
            <div className="layout-left col-4">
                <Icon.react />
            </div>
            <div className="layout-right col-8">
                <span className="language">
                    English<strong>(UK)</strong>
                </span>
                <div className="main-form col-8">
                    <h1 className="title mb-5">Create Account</h1>

                    <Formik
                        initialValues={{ firstName: '', email: '', lastName: '', password: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 200);
                        }}
                        validationSchema={SignupSchema}
                    >
                        {({ errors, touched }) => (
                            <Form className="col-12">
                                <div className="mb-5">
                                    <Field
                                        name="firstName"
                                        className="form-control radius"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="firstName" />
                                </div>
                                <div className="mb-5">
                                    <Field
                                        name="email"
                                        className="form-control radius"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="email" />
                                </div>
                                <div className="mb-5">
                                    <Field
                                        name="lastName"
                                        className="form-control radius"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="lastName" />
                                </div>
                                <div className="mb-5">
                                    <Field
                                        name="password"
                                        className="form-control radius"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="password" />
                                </div>
                                <button
                                    className=" mt-5 btn btn-submit col-12 d-flex justify-content-center"
                                    type="submit"
                                >
                                    Regsiter
                                </button>
                                <p className="mt-2 ">
                                    <span className="me-2"> Already have an account? </span>
                                    <Link to="/login">Log in </Link>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <img className=" col-4 logo" src={Img.logo} alt="logo" height="480px" />
        </div>
    );
};

RegisterPage.propTypes = {};

export default RegisterPage;
