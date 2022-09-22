import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
// scss
import './LoginPage.scss';
import { Icon, Img } from '~/assets/constants';


const LoginPage = (props) => {

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('enter your username'),
        password: Yup.string().required('enter your password'),
    });


    return (
        <div className="container row login">
            <div className="layout-left col-4">
                <Icon.react />
            </div>
            <div className="layout-right col-8">
                <span className="language">
                    English<strong>(UK)</strong>
                </span>
                <div className="main-form col-8">
                    <h1 className="title">Login Account</h1>
                    <div className="sigup__option">
                        <button className="btn btn-normal">
                            <Icon.gg /> <span>Signup with Google</span>
                        </button>
                        <button className="btn btn-normal">
                            <Icon.fb /> <span>Signup with Facebook</span>
                        </button>
                    </div>
                    <div className="signup--or mt-4 mb-4">-OR-</div>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 200);
                        }}
                        validationSchema={LoginSchema}
                    >
                        {({ errors, touched }) => (
                            <Form className="col-12">
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
                                    Login
                                </button>
                                <p className="mt-2 ">
                                    <span className="me-2"> You don't have account?</span>
                                    <Link to="/register">Regsiter</Link>
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

LoginPage.propTypes = {};

export default LoginPage;
