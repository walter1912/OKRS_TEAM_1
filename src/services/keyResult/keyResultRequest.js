import axiosInstance from '~/utils/axiosInstance';
import { settingSliceActions } from '../setting/settingSlice';
import { keyResultSliceActions } from './keyResultSlice';

export const keyResultRequest = {
    createKeyResult: async function (objectiveID, data, dispatch) {
        try {
            const url = `/objectives/${objectiveID}/key-results`;
            const res = await axiosInstance.post(url, data);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: res.data.name ?? 'SUCCESS',
                }),
            );
            console.log('success createKeyResult: ', res.data);
        } catch (err) {
            console.log('err createKeyResult: ', err);
        }
    },
    getListKeyResult: async function (objectiveID, dispatch) {
        try {
            const url = `objectives/${objectiveID}/key-results`;
            const res = await axiosInstance.get(url);
            dispatch(
                settingSliceActions.setItem({
                    requestStatus: res.data.name ?? 'SUCCESS',
                }),
            );
            dispatch(keyResultSliceActions.getListKeyResult(res.data));
            console.log('success createKeyResult: ', res.data);
        } catch (err) {
            console.log('err createKeyResult: ', err);
        }
    }
};
