import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '~/assets/constants';
import './UserPage.scss';

// import user from '../../assets/APIs_tmp/user.json';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';

const UserPage = (props) => {
    const user = useSelector((state)=> state.user);
    return (
        <div className="infor col-10 d-flex flex-column">
            <nav className="infor__main d-flex flex-row align-items-center">
                <img src={Img.userAvatar} alt="avatar" />
                <h1 className="ms-5">
                    {user.firstName} {user.lastName}
                </h1>
            </nav>
            <div className="d-flex flex-column justify-content-left  align-items-left mt-5">
                <h2>Thông tin</h2>
                <ul className="infor__list">
                    <li className="infor__item d-flex flex-row align-items-center">
                        <i className="fa-regular fa-envelope"></i>
                        <span className="ms-4">{user.email}</span>
                    </li>
                    <li className="infor__item d-flex flex-row align-items-center">
                        <i className="fa-solid fa-phone"></i>
                        <span className="ms-4">{user.phoneNumber}</span>
                    </li>
                    <li className="infor__item d-flex flex-row align-items-center">
                        <i class="fa-regular fa-calendar-days"></i>
                        <span className="ms-4">{moment(user.dob).format("MMMM Do YYYY")}</span>
                    </li>
                    <li className="infor__item d-flex flex-row align-items-center">
                        <i class="fa-regular fa-address-book"></i>
                        <span className="ms-4">{user.address}</span>
                    </li>
                </ul>
            </div>
            <nav className="infor__update">
                <Link to='edit'>
                    <button className="btn btn-outlet-primary text-primary">
                        Chỉnh sửa thông tin người dùng
                    </button>
                </Link>
            </nav>
        </div>
    );
};

UserPage.propTypes = {};

export default UserPage;
