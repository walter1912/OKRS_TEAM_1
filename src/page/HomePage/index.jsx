import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Img } from '~/assets/constants.js';
import clsx from 'clsx';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import user from '../../assets/APIs_tmp/user.json';
import objectives from '../../assets/APIs_tmp/objectives.json';

const HomePage = (props) => {
    return (
        <div>
            <Header props={user} />
            <article className="container p-0">
                <h1>My Objectives</h1>
                <nav className="row d-flex flex-row justify-content-between align-items-center">
                    <div className="col-6 d-flex justify-content-between align-items-center mt-4">
                        <button className="btn btn-primary">Create Objective</button>
                        <form className="d-flex align-items-center" action="" method="post">
                            <input
                                className="form-control"
                                type="search"
                                name="search_objective"
                                id="search_objective"
                            />
                            <button className="btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex flex-row align-items-center">
                        <span>Type Objective: </span>
                        <select className="form-select" defaultValue="0">
                            <option value="0" selected>
                                Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </nav>
                <section className="obj">
                    <ul className="container">
                        {objectives.map((obj) => {
                            console.log('obj:', obj);
                            obj.processing = '0';
                            return <Objective props={obj} />;
                        })}
                    </ul>
                </section>
            </article>
            <Footer />
        </div>
    );
};

HomePage.propTypes = {};

const Objective = (props) => {
    const { _id, name, type, description, deadline, createdAt, updatedAt, processing } = props.props;

    var updateDate = new Date(updatedAt).toLocaleString('vi', { hour12: true });
    const [seen, setSeen] = useState(false);
    const handleObj = () => {
        setSeen(!seen);
    };
    return (
        <div>
            <div className="d-flex flex-row align-items-center col-12">
                <i className={clsx('fa-solid', { 'fa-chevron-down': seen }, { 'fa-chevron-right': !seen })}></i>
                <li
                    id={_id}
                    className="col-11 obj__item d-flex flex-row justify-content-between align-items-center"
                    onClick={() => handleObj()}
                >
                    <h2 className="">{name}</h2>
                    <div className=" d-flex flex-row align-items-center">
                        <span className="me-5">{type}</span>
                        <span className="me-5">{updateDate}</span>
                        <div className="obj__processing">{processing}</div>
                    </div>
                </li>
            </div>
            {seen && <p className="obj__des">{description}</p>}
        </div>
    );
};
Objective.propTypes = {
    // _id, name, type, description, deadline, createdAt, updatedAt, processing
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    processing: PropTypes.string,
};

export default HomePage;
