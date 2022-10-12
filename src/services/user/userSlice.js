import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

const initialState = {
    user: getLocalStorage('user'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getInfor(state, action) {
            const user = action.payload;
            setLocalStorage('user', user);
            state.user = user;
        },
        updateInfor(state, action) {
            const user =  action.payload;
            removeLocalStorage('user');
            setLocalStorage('user', user);
            state.user = user;
        },
        logout(state, action) {
            state.user = null;
            removeLocalStorage('user');
        },
    },
});
export const userReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;
