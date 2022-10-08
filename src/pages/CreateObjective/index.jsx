import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';

import './CreateObjective.scss';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import user from '../../assets/APIs_tmp/user.json';
import { Link } from 'react-router-dom';

const KRs = [
    {
        name: 'name 1',
        description: 'mô tả 1',
        deadline: null,
        status: 'trang thái 1',
        message: 'message 1',
    },
];
const validationObjective = {
    name: Yup.string().required('Nhập tên objective'),
    type: Yup.string().required('Chọn loại Objective'),
    description: Yup.string().required('Nhập mô tả của Objective'),
    deadline: Yup.date().required('Chọn ngày đến hạn của objective'),
    keyResults: Yup.object().shape({
        name: Yup.string().required('Nhập tên key result'),
        description: Yup.string().required('Nhập mô tả của key result'),
        deadline: Yup.date().required('Nhập ngày deadline của key result'),
        status: Yup.string().required('Nhập trạng thái của key result'),
        message: Yup.string().required('Nhập mesage của key result'),
    }),
};
const CreateObjective = (props) => {
    const [addKR, setAddKR] = useState(false);
    const [listKRs, setListKRs] = useState(KRs);
    const [checkRequest, setcheckRequest] = useState(false);
    console.log(listKRs);

    const handleAddKR = (action) => {
        setAddKR(!addKR);
        action('keyResults', { name: '', description: '', deadline: '', status: '', message: '' });
    };

    const handleSetListKRs = (kr) => {
        let { name, description, deadline, status, message } = kr;
        if (name === '' || description === '' || deadline === '' || status === '' || message === '') return;
        setAddKR(!addKR);
        console.log('kr: ', kr);
        console.log('list KRs: ', listKRs);
        setListKRs((pre) => [...pre, kr]);
        setcheckRequest(true);
    };

    return (
        <div>
            <Header props={user} />
            <div className="container createObjective" style={{ backgroundColor: '#F9F3EE' }}>
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
                        keyResults: { name: '', description: '', deadline: '', status: '', message: '' },
                    }}
                    validationSchema={Yup.object().shape(validationObjective)}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            console.log('krey: ', values.keyResults);
                            const { name, deadline, description } = values;
                            let createdAt = new Date();
                            const dataRes = { name, deadline, description, listKRs, createdAt };
                            console.log('dataRes: ', dataRes);
                            actions.setSubmitting(false);
                        }, 200);
                      
                    }}
                >
                    {({ values, setFieldValue, handleSubmit, errors }) => (
                        <Form className="row col-6 m-auto d-flex">
                            <div className="mt-2 mb-2">
                                <Field
                                    name="name"
                                    className="form-control radius"
                                    type="text"
                                    placeholder="Name Objective"
                                />
                                <ErrorMessage component="p" className="text-warning field-error" name="name" />
                            </div>
                            <div className="mt-2 mb-2 col-12 d-flex flex-row">
                                <FastField name="type">
                                    {({ field }) => (
                                        <select {...field} className="form-select" style={{ width: '200px' }}>
                                            {/* <h2 htmlFor="type">What is your objective type?</h2> */}
                                            <option selected value="NY">
                                                New York
                                            </option>
                                            <option value="SF">San Francisco</option>
                                            <option value="CH">Chicago</option>
                                            <option value="OTHER">Other</option>
                                        </select>
                                    )}
                                </FastField>
                                <ErrorMessage component="p" className="text-warning field-error" name="type" />

                                <Field type="date" name="deadline" className="form-control"></Field>
                                <ErrorMessage component="p" className="text-warning field-error" name="deadline" />
                            </div>
                            <div className="mt-2 mb-2">
                                <FastField name="description">
                                    {({ field }) => (
                                        <div class="form-floating">
                                            <textarea
                                                {...field}
                                                className="form-control"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            ></textarea>
                                            <label>Description </label>
                                        </div>
                                    )}
                                </FastField>
                                <ErrorMessage component="p" className="text-warning field-error" name="description" />
                            </div>

                            <div>
                                {addKR && (
                                    <div className="row" style={{ backgroundColor: '#fafafa' }}>
                                        <div className="col-6">
                                            <label htmlFor="">Tên KR: </label>
                                            <Field type="text" name="keyResults.name" />
                                            <ErrorMessage
                                                component="p"
                                                className="text-warning field-error"
                                                name="keyResults.name"
                                            />
                                        </div>
                                        <div className="col-6 mt-2 mb-2">
                                            <label htmlFor="">Mô tả:</label>
                                            <FastField name="keyResults.description">
                                                {({ field }) => (
                                                    <textarea {...field} className="form-control">
                                                        <label htmlFor="">Mô tả key result</label>
                                                    </textarea>
                                                )}
                                            </FastField>
                                            <ErrorMessage
                                                component="p"
                                                className="text-warning field-error"
                                                name="keyResults.description"
                                            />
                                        </div>
                                        <div className="col-6 mt-2 mb-2">
                                            <label htmlFor="">Deadline: </label>
                                            <Field type="date" name="keyResults.deadline" />
                                            <ErrorMessage
                                                component="p"
                                                className="text-warning field-error"
                                                name="keyResults.deadline"
                                            />
                                        </div>
                                        <div className="col-6 mt-2 mb-2">
                                            <label htmlFor="">Trạng thái: </label>
                                            <Field type="text" name="keyResults.status" />
                                            <ErrorMessage
                                                component="p"
                                                className="text-warning field-error"
                                                name="keyResults.status"
                                            />
                                        </div>
                                        <div className="col-6 mt-2 mb-2">
                                            <label htmlFor="">Message: </label>
                                            <Field type="text" name="keyResults.message" />
                                            <ErrorMessage
                                                component="p"
                                                className="text-warning field-error"
                                                name="keyResults.message"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-secondary"
                                            type="button"
                                            onClick={() => handleSetListKRs(values.keyResults)}
                                        >
                                            Tạo KR
                                        </button>
                                    </div>
                                )}
                                {!addKR && (
                                    <div className="btn btn-secondary" onClick={() => handleAddKR(setFieldValue)}>
                                        Thêm KR
                                    </div>
                                )}
                            </div>
                            <div>
                                {listKRs.map((kr) => (
                                    <KeyResult props={kr} />
                                ))}
                            </div>
                            <div className="d-flex justify-content-between">

                            <Link to={checkRequest ? '/' :''}>
                                <button className="btn btn-primary">Hoàn thành</button>
                            </Link>
                            <Link to='..' relative='path'>
                                <button className="btn btn-outline-secondary">Trở lại</button>
                            </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    );
};

CreateObjective.propTypes = {};
const KeyResult = React.memo((props) => {
    const { name, description, deadline, status, message } = props.props;
    console.log('props: ', props);
    return (
        <ul>
            <li>Tên: {name}</li>
            <li>Mô tả: {description}</li>
            <li>Deadline: {deadline}</li>
            <li>status: {status}</li>
            <li>message: {message}</li>
        </ul>
    );
});
KeyResult.propTypes = { props: PropTypes.object };

export default CreateObjective;
