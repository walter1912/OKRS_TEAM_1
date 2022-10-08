import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Img } from '~/assets/constants.js';
import clsx from 'clsx';
import './HomePage.scss';
import { Link, Outlet } from 'react-router-dom';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';

// import user from '../../assets/APIs_tmp/user.json';
import objectives from '../../assets/APIs_tmp/objectives.json';
import Pagination from '~/components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userRequest } from '~/services/user/userRequest';
import { objectiveRequest } from '~/services/objective/objectiveRequest';

const HomePage = (props) => {
    let PageSize = 3;
    // phân trang
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return objectives.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    // hết phần phân trang
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { listObjective } = useSelector((state) => state.objective);

    useEffect(() => {
        if (user === null) {
            userRequest.getInfor(dispatch);
        }
    }, []);
    useEffect(() => {
        if (listObjective.length === 0) {
            objectiveRequest.getListObjective(dispatch);
        }
    }, []);
    return (
        <div>
            <Header />
            <article className="container p-0">
                <h1>My Objectives</h1>
                <nav className="row d-flex flex-row justify-content-between align-items-center">
                    <div className="col-6 d-flex justify-content-between align-items-center mt-4">
                        <Link to="/createObjective">
                            {' '}
                            <button className="btn btn-primary">Create Objective</button>
                        </Link>
                        <form className="d-flex align-items-center" action="" method="post">
                            <input
                                className="form-control"
                                type="search"
                                name="search_objective"
                                id="search_objective"
                                placeholder="Search Objective"
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
                    <ul className="container obj__list">
                        <li
                            key="0"
                            className="col-11 d-flex flex-row justify-content-between align-items-center mt-5 mb-0 ms-5"
                        >
                            <h3 className="">Tên</h3>
                            <div className=" d-flex flex-row align-items-center">
                                <h3 className="me-5">Loại OKR</h3>
                                <h3 className="me-5">Ngày cập nhật</h3>
                                <h3 className="">Tiến trình</h3>
                            </div>
                        </li>
                        <hr />
                        {currentTableData.map((obj) => {
                            console.log('obj:', obj);
                            obj.processing = '0';
                            return <Objective props={obj} />;
                        })}
                    </ul>
                </section>
            </article>
            <Pagination
                className="pagination-bar col-12"
                currentPage={currentPage}
                totalCount={objectives.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
            <Footer />
        </div>
    );
};

HomePage.propTypes = {};

const Objective = (props) => {
    const { _id, name, type, description, deadline, createdAt, updatedAt, processing } = props.props;

    var updateDate = new Date(updatedAt).toLocaleString('vi', { hour12: true }) ?? 'Create At';
    const [seen, setSeen] = useState(false);
    const handleObj = () => {
        setSeen(!seen);
    };
    return (
        <div>
            <div className="d-flex flex-row align-items-center col-12">
                <i
                    className={clsx('fa-solid', { 'fa-chevron-down': seen }, { 'fa-chevron-right': !seen })}
                    onClick={() => handleObj()}
                ></i>
                <li id={_id} className="col-11 obj__item d-flex flex-row justify-content-between align-items-center">
                    <Link to={`objectives/${_id}`}>
                        <h2 className="">{name}</h2>
                    </Link>
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
