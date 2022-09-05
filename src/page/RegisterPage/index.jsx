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
        fullname: Yup.string().min(2, 'too short').required('enter your fullname'),
        email: Yup.string().email('Invalid email').required('enter your email'),
        username: Yup.string().min(2, 'too short').required('enter your username'),
        password: Yup.string().min(6, 'Weak password').required('enter your password'),
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
                        initialValues={{ fullname: '', email: '', username: '', password: '' }}
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
                                        name="fullname"
                                        className="form-control radius"
                                        type="text"
                                        placeholder="Fullname"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="fullname" />
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
                                        name="username"
                                        className="form-control radius"
                                        type="text"
                                        placeholder="Username"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="username" />
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
