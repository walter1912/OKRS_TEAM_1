// rscp
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';

// import user from '../../assets/APIs_tmp/user.json';
import { useParams } from 'react-router';
// import objectives from '../../assets/APIs_tmp/objectives.json';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { objectiveRequest } from '~/services/objective/objectiveRequest';

const ViewObjectivePage = (props) => {
    let { idObjective } = useParams();
    const [objective, setObjective] = useState({});
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchObjective = async () => {
            const res = await objectiveRequest.getDetailObjective(idObjective, dispatch);
            setObjective(res);
        };
        fetchObjective();
    }, [idObjective]);
    // get keyresult from objetive
    

    // console.log('view objective:', idObjective, ObjRes);
    const { _id, name, type, description, deadline, userId, keyResults, createdAt, updatedAt, __v } = objective;
    if (keyResults.length === 0) {
        for (let i = 1; i < 5; i++) {
            keyResults.push(`kết quả then chốt thứ ${i}`);
        }
    }
    const handleDeleteByID = (ObjRes) => {
        if (window.confirm(`Bạn có muốn xóa objective ${ObjRes.name}`) === true) {
            // xóa
        } else {
            // khong xóa
        }
    };
    console.log('keyResults', keyResults);
    return (
        <div>
            <Header props={user} />
            <span>trang view objective</span>
            <div className="container viewObjectivePage">
                <header className="nav d-flex flex-row justify-content-between">
                    <Link to=".." relative="path">
                        <button className="btn btn-outline-secondary">
                            <i className="fa-solid fa-chevron-left me-1"></i>
                            Trở lại
                        </button>
                    </Link>
                    <div className="">
                        <button className="btn btn-outline-primary">
                            <i className="fa-regular fa-pen-to-square me-1"></i>
                            Chỉnh sửa
                        </button>
                        <button className="btn btn-danger ms-4" onClick={() => handleDeleteByID(objective)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </header>
                <article className="row">
                    <h1 id="name">{name}</h1>
                    <div className="col-4 d-flex justify-content-between mt-2 mb-2">
                        <span id="type">{type}</span>
                        <span id="description">{description}</span>
                    </div>
                    <div className="d-flex  flex-column justify-content-around mt-2 mb-2">
                        <span id="createdAt">Tạo lúc: {moment(createdAt).format('DD/MM/YYYY, hh:mm:ss')}</span>
                        <span id="updatedAt">Cập nhật lúc: {moment(updatedAt).format('DD/MM/YYYY, hh:mm:ss')}</span>
                    </div>
                    <ul className="list-group">
                        <div className="col-12 d-flex justify-content-between">
                            <h2>Key Results:</h2>
                        </div>
                        {keyResults.map((keyResult) => (
                            <li className="list-group-item">{keyResult}</li>
                        ))}
                    </ul>
                </article>
            </div>
            <Footer />
        </div>
    );
};

ViewObjectivePage.propTypes = {
    // _id,name,type,description,deadline,userId,keyResults,createdAt,updatedAt,__v
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    deadline: PropTypes.string,
    userId: PropTypes.string,
    keyResults: PropTypes.array,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
};

export default ViewObjectivePage;
