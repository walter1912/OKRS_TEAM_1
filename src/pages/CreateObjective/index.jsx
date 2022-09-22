import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './CreateObjective.scss';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import user from '../../assets/APIs_tmp/user.json';

const CreateObjective = (props) => {
    return (
        <div>
            <Header props={user} />
            <div className="container createObjective">
                <h1>Create your objective</h1>
                <Formik
                    initialValues={{
                        _id: '',
                        name: '',
                        type: '',
                        description: '',
                        deadline: '',
                        userId: '',
                        createdAt: '',
                    }}

                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 200);
                    }}
                >
                    {() => (
                        <Form>


                        </Form>

                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    );
};

CreateObjective.propTypes = {};

export default CreateObjective;
