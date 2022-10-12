import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage, FastField } from 'formik';

import './CreateObjective.scss';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import { Link } from 'react-router-dom';
import { objectiveRequest } from '~/services/objective/objectiveRequest';
import { useDispatch, useSelector } from 'react-redux';
import { keyResultRequest } from '~/services/keyResult/keyResultRequest';
import { getLocalStorage } from '~/utils/localStorage';
import { ObjectiveSchema } from '~/utils/yup/schema';
import { keyResults, newObjective } from '~/utils/yup/propsType';

const CreateObjective = (props) => {
    const [addKR, setAddKR] = useState(false);
    const [listKRs, setListKRs] = useState([]);
    const [checkRequest, setcheckRequest] = useState(false);
    //  store
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const requestStatus = useSelector((state) => state.setting.requestStatus);


    // HANDLE ONCLICK

    const handleAddKR = (action) => {
        setAddKR(!addKR);
        action('keyResults', { name: '', description: '', deadline: '' });
    };
    const handleSetListKRs = (kr) => {
        const { name, description } = kr;
        let deadline = new Date(kr.deadline).toISOString();
        if (name === '' || description === '' || deadline === '') return;

        let createdAt = new Date().toISOString();
        let updateAt = new Date().toISOString();

        console.log('kr: ', kr);
        console.log('list KRs: ', listKRs);
        setListKRs((pre) => [...pre, { ...kr, createdAt, updateAt, deadline }]);
        setcheckRequest(true);
        setAddKR(!addKR);
    };
    const handleOnSubmit = async (values, actions) => {
        console.log('kr key: ', values.keyResults);
        const { newObjective } = values;
        let deadline = new Date(newObjective.deadline).toISOString();
        let createdAt = new Date().toISOString();
        let updateAt = new Date().toISOString();
        const dataRes = { ...newObjective, createdAt, updateAt, deadline };
        console.log('dataRes: ', dataRes);

        // post objective
        await objectiveRequest.createObjective(dataRes, dispatch);
        if (requestStatus === 'SUCCESS') {
            // post key result
            const currentObjective = getLocalStorage('currentObjective');
            listKRs.map((keyResult) => {
                keyResultRequest.createKeyResult(currentObjective._id, keyResult, dispatch);
                console.log('add kr to ', currentObjective._id);
                console.log('kr is :', keyResult);
            });
        }
        actions.setSubmitting(false);
    }

    return (
        <div>
            <Header props={user} />
            <div className="container createObjective" style={{ backgroundColor: '#F9F3EE' }}>
                <h1>Create your objective</h1>
                <Formik
                    initialValues={{
                        newObjective: {
                           ...newObjective
                        },
                        keyResults: {
                          ...keyResults
                        },
                    }}
                    validationSchema={ObjectiveSchema}
                    onSubmit={(values, action) =>handleOnSubmit(values, action)}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="row col-6 m-auto d-flex">
                            <div className="mt-2 mb-2">
                                <Field
                                    name="newObjective.name"
                                    className="form-control radius"
                                    type="text"
                                    placeholder="Name Objective"
                                />
                                <ErrorMessage
                                    component="p"
                                    className="text-warning field-error"
                                    name="newObjective.name"
                                />
                            </div>
                            <div className="mt-2 mb-2 col-12 d-flex flex-row">
                                <FastField name="newObjective.type">
                                    {({ field }) => (
                                        <select {...field} className="form-select" style={{ width: '200px' }}>
                                            <option value="BREAKTHROUGH">BREAKTHROUGH</option>
                                            <option value="COMMIT">COMMIT</option>
                                        </select>
                                    )}
                                </FastField>
                                <ErrorMessage
                                    component="p"
                                    className="text-warning field-error"
                                    name="newObjective.type"
                                />
                                <Field type="date" name="newObjective.deadline" className="form-control"></Field>
                                <ErrorMessage
                                    component="p"
                                    className="text-warning field-error"
                                    name="newObjective.deadline"
                                />
                            </div>
                            <div className="mt-2 mb-2">
                                <FastField name="newObjective.description">
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
                                <ErrorMessage
                                    component="p"
                                    className="text-warning field-error"
                                    name="newObjective.description"
                                />
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
                                {/* <Link to={checkRequest ? '/' : ''}> */}
                                <button type="submit" className="btn btn-primary">
                                    Hoàn thành
                                </button>
                                {/* </Link> */}
                                <Link to=".." relative="path">
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
    const kr = props.props;
    const { name, description, deadline, status, message } =kr;
    // console.log('props: ', props);
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
