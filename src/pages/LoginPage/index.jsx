import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link, Navigate } from 'react-router-dom';
// scss
import './LoginPage.scss';
import { Icon, Img } from '~/assets/constants';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '~/services/auth/authRequest';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('enter your email'),
    password: Yup.string().required('enter your password'),
});
const LoginPage = (props) => {

   

    const dispatch = useDispatch();
    const {access_token} = useSelector((state) => state.auth);
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
                        initialValues={{ email: 'leoasher@gmail.com', password: 'leoasher' }}
                        onSubmit={async (values, actions) => {
                            try {
                                authRequest.login(values, dispatch);
                                setTimeout(() => {
                                    alert(JSON.stringify("login success"));
                                    actions.setSubmitting(false);
                                }, 200);
                            }
                            catch (err) {
                                console.log("values login: ", values);
                            }
                        }}
                        validationSchema={LoginSchema}
                    >
                        {({ errors, touched }) => (
                            <Form className="col-12">
                                {access_token && <Navigate to='/' />}
                                <div className="mb-5">
                                    <Field
                                        name="email"
                                        className="form-control radius"
                                        type="email"
                                        placeholder="Username"
                                    />
                                    <ErrorMessage component="p" className="text-warning" name="email" />
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
                                    <Link to="/sign-up">Regsiter</Link>
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
