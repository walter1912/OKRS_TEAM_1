import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Img } from '~/assets/constants';
import './Header.scss';
// import user from '../../assets/APIs_tmp/user.json';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '~/services/user/userRequest';
const Header = (props) => {
    const {user} = useSelector((state) => state.user)
    const { firstName, lastName } = user;
    console.log("user headerPage: ", user);
    console.log("id, f, l: ",firstName, lastName)
    console.log("props: ", user);
    return (
        <header className=" header--homePage d-flex flex-row justify-content-between align-items-center p-5">
            <div className="user d-flex flex-row align-items-center">
                <img src={Img.userAvatar} alt="userAvatar" className="user__avatar" />
                <h2 className="user__name ms-4 me-5">
                    {firstName} {lastName}
                </h2>
                <Link to={'/user/'} >
                    <span>View Detail</span>
                </Link>
            </div>
            <div className="authen">
                <Link to={'/register'}>
                    <button className="btn btn-primary me-4">
                        Regsiter
                    </button>
                </Link>
                <Link to={'/login'}>
                    <button className="btn btn-secondary">
                        Logout
                    </button>
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    props: PropTypes.object,
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

export default memo(Header);
