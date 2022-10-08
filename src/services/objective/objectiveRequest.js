import axiosInstance from '~/utils/axiosInstance';
import { settingSliceActions } from '../setting/settingSlice';
import { objectiveSliceActions } from './objectiveSlice';

export const objectiveRequest = {
    getListObjective: async function (dispatch) {
        try {
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'LOADING',
                }),
            );
            const url = '/objectives';
            const res = await axiosInstance.get(url);
            dispatch(objectiveSliceActions.getListObjective(res.data.listObjective));
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'SUCCESS',
                }),
            );
        } catch (err) {
            console.log('error: ', err);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: 'ERROR',
                }),
            );
        }
    },
    getDetailObjective: async function (dispatch, idObjective) {
        try {
            const url = `/objectives/objective?idObjective=${idObjective}`;
            const res = await axiosInstance.get(url);
            dispatch(
                settingSliceActions.setItem({
                  requestStatus: 'SUCCESS',
                })
              );
            return res.data;
        } catch (err) {
            console.log('error: ', err);
            dispatch(
                settingSliceActions.setItem({
                  requestStatus: 'ERROR',
                })
              );
        }
    },
};
