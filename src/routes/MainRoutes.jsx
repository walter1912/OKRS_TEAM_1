import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router';
import RegisterPage from '~/pages/RegisterPage';
import LoginPage from '~/pages/LoginPage';
import HomePage from '~/pages/HomePage';
import UserPage from '~/pages/UserPage';
import EditUserPage from '~/pages/EditUserPage';
import CreateObjective from '~/pages/CreateObjective';
import ViewObjectivePage from '~/pages/ViewObjectivePage';
import ViewCommit from '~/pages/ViewCommit';
import AuthRoute from './AuthRoute';

const MainRoutes = (props) => {
    return (
        <Suspense>
            <Routes>
                <Route path="/sign-up" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              
                <Route path="" element={<AuthRoute />}>
                <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/user/edit" element={<EditUserPage />} />
                    <Route path="/createObjective" element={<CreateObjective />} />
                    <Route path="/objectives/:objectiveID" element={<ViewObjectivePage />} />
                    <Route path="/key-results/:keyResultID" element={<ViewCommit />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

MainRoutes.propTypes = {};

export default MainRoutes;
