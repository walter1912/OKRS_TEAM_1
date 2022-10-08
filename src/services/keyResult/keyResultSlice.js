const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    listKeyResult: [],
};

const keyResultSlice = createSlice({
    name: 'keyResult',
    initialState,
    reducers: {
        getListKeyResult(state, action) {
            const listKeyResult = action.listKeyResult;
            state.listKeyResult = listKeyResult;
        },
    },
});

export const keyResultReducer = keyResultSlice.reducer;
export const keyResultSliceActions = keyResultSlice.actions;
