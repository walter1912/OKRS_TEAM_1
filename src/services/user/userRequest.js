import axiosInstance from '~/utils/axiosInstance';
import { settingSliceActions } from '../setting/settingSlice';
import { userSliceActions } from './userSlice';

export const userRequest = {
    getInfor: async function (dispatch) {
        try {
            const url = '/user';
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
            return err.response;
        }
    },
    updateInfo: async function (data, dispatch, cb) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = `/user/edit`;
            const response = await axiosInstance.post(url, data);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            cb();
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
