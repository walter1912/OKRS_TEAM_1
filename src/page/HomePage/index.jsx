import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Img } from '~/assets/constants.js';

import './HomePage.scss';
import { Link } from 'react-router-dom';
const HomePage = (props) => {
    return (
        <article className="">
            <section className="bar-left col-2">
                <ul className="bar-left__menu">
                    <div>
                        <p>Uptech icon</p>
                        <i className="fa-solid fa-chevrons-right"></i>
                    </div>
                    <li className="bar-left__item">
                        <Icon.react />
                        <span>Profile</span>
                    </li>
                    <p>My Team</p>
                    <MenuLeft icon={Img.user} link='/user' span="Profile" />
                </ul>
            </section>
            <section className="content-right"></section>
        </article>
    );
};

HomePage.propTypes = {};

const MenuLeft = (props) => {
    const { icon, link, span } = props;
    return (
        <li className="bar-left__item">
            <img src={icon} alt={link} width='50px' height='50px' />
            <Link className='link' to={link} >{span}</Link>
        </li>
    );
};
MenuLeft.propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string,
    span: PropTypes.string,    

};

export default HomePage;
