import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

const initialState = {
    accessToken: getLocalStorage('accessToken'),
    current_user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const accessToken = action.payload.accessToken;
            state.accessToken = accessToken;
            setLocalStorage("accessToken", accessToken);
        },

        logout(state, action) {
            state.accessToken = "";
            removeLocalStorage("accessToken");
        },
    }
})

export const authReducer = authSlice.reducer;
export const authSliceActions = authSlice.actions;