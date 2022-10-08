const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    listObjective: [],
};

const objectiveSlice = createSlice({
    name: 'objective',
    initialState,
    reducers: {
        getListObjective(state, action) {
            const listObjective = action.payload;
            state.listObjective = listObjective;
        },
    },
});

export const objectiveReducer = objectiveSlice.reducer;
export const objectiveSliceActions = objectiveSlice.actions;
