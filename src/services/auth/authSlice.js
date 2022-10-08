import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

const initialState = {
    access_token: getLocalStorage('access_token'),
    current_user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const access_token = action.payload.access_token;
            state.access_token = access_token;
            setLocalStorage("access_token", access_token);
        },

        logout(state, action) {
            state.access_token = "";
            removeLocalStorage("access_token");
        },
    }
})

export const authReducer = authSlice.reducer;
export const authSliceActions = authSlice.actions;