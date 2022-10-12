import axiosInstance from '~/utils/axiosInstance';
import authActions from '../auth/authRequest';
import { authSliceActions } from '../auth/authSlice';
import { settingSliceActions } from '../setting/settingSlice';
import { userSliceActions } from './userSlice';

export const userRequest = {
    getInfor: async function (dispatch) {
        try {
            const url = '/users/profile';
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const response = await axiosInstance.get(url);
            dispatch(userSliceActions.getInfor(response.data));
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
        } catch (err) {
            console.log('get infor user failed: ', err);
        }
    },

    updateInfor: async function (data, dispatch) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = `/users/profile`;
            const response = await axiosInstance.put(url, data);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            dispatch(userSliceActions.updateInfor(response.data))
            console.log('user update: ', response.data);
            return response.data;
        } catch (err) {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
            console.log('err: ', err);
        }
    },
};
