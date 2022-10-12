import { createAction } from '@reduxjs/toolkit';
import axiosInstance from '~/utils/axiosInstance';
import { userRequest } from '../user/userRequest';
import { userSliceActions } from '../user/userSlice';
import { authSliceActions } from './authSlice';

export const authRequest = {
    signUp: async function (data, dispatch) {
        try {
            const url = '/auth/sign-up';
            const res = await axiosInstance.post(url, data);
            console.log('res sign up: ', res);
        } catch (err) {
            console.log('sign up failed: ', err);
        }
    },
    login: async function (data, dispatch) {
        try {
            console.log(1111111111111111);
            const url = '/auth/login';
            console.log('respose:');
            const res = await axiosInstance.post(url, data);

            dispatch(authSliceActions.loginSuccess(res.data));
            userRequest.getInfor(dispatch);
        } catch (err) {
            console.log('login fail: ', err);
        }
    },

    logout: async function (dispatch) {
        try {
            const url = '/logout';
            const response = await axiosInstance.get(url);
            dispatch(userSliceActions.logout());
            dispatch(authSliceActions.logout());
            return response;
        } catch (err) {
            console.log('err logout: ', err);
        }
    },
};
const authActions = {
    login: createAction('LOGIN'),
    logout: createAction('LOGOUT'),
};

export default authActions;
