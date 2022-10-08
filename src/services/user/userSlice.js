import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

const initialState = {
    current_user: getLocalStorage('current_user'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getInfor(state, action) {
            const current_user = action.payload;
            setLocalStorage('current_user', current_user);
            state.current_user = current_user;
        },
        logout(state, action) {
            state.current_user = null;
            removeLocalStorage('current_user');
        },
    },
});
export const userReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;
