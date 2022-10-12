import axiosInstance from '~/utils/axiosInstance';
import { settingSliceActions } from '../setting/settingSlice';
import { objectiveSliceActions } from './objectiveSlice';

export const objectiveRequest = {
    createObjective: async function (data, dispatch) {
        try {
            const url = '/objectives';
            console.log('data to post objective: ', data);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const res = await axiosInstance.post(url, data);
            console.log('success create objective: ', res.data);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            dispatch(objectiveSliceActions.postOjbective(res.data));
        } catch (err) {
            console.log('err create objective: ', err);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
        }
    },
    getListObjective: async function (dispatch) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = '/objectives';
            const res = await axiosInstance.get(url);
            dispatch(objectiveSliceActions.getListObjective(res.data));
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            console.log('get objectives: ', res.data);
        } catch (err) {
            console.log('error: ', err);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
        }
    },
    getDetailObjective: async function (objectiveID, dispatch) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = `/objectives/${objectiveID}`;
            const res = await axiosInstance.get(url);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            objectiveSliceActions.postOjbective(res.data);
            console.log("getDetailObjective: ", res.data)
            return res.data;
        } catch (err) {
            console.log('error getDetailObjective: ', err);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
        }
    },
    deleteObjective: async function (objectiveID, dispatch) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = `/objectives/${objectiveID}`;
            const res = await axiosInstance.delete(url);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
            console.log('deleteObjective success: ', res.data.message);
        } catch (err) {
            console.log('error deleteObjective: ', err);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
        }
    },
};
