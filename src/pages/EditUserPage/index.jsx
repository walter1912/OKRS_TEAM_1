import React from 'react';
import PropTypes from 'prop-types';

import './EditUserPage.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '~/services/user/userRequest';
import { UserSchema } from '~/utils/yup/schema';

const EditUserPage = (props) => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
   
    return (
        <div className="col-4 editUser">
            <h1 className="mt-5 mb-5">Edit user</h1>
            <Formik
                initialValues={{ ...user }}
                onSubmit={(values, actions) => {
                    values.updateAt = new Date().toISOString();
                    values.dob = new Date(values.dob);
                    userRequest.updateInfor(values, dispatch);
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
                        {/* <div className="mb-2">
                            <Field name="password" className="form-control radius" type="password" placeholder="Email" />
                            <ErrorMessage component="p" className="text-danger error-input " name="password" />
                        </div> */}
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
            <Link to="/user">
                <button className="btn">Return</button>
            </Link>
        </div>
    );
};

EditUserPage.propTypes = {};

export default EditUserPage;
