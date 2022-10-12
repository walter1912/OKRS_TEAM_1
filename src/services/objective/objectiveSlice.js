import { getLocalStorage, removeLocalStorage, setLocalStorage } from '~/utils/localStorage';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    listObjective: getLocalStorage("listObjective"),
    currentObjective: null,
};

const objectiveSlice = createSlice({
    name: 'objective',
    initialState,
    reducers: {
        postOjbective(state, action){
            const currentObjective = action.payload;
            removeLocalStorage("currentObjective", currentObjective);
            setLocalStorage("currentObjective", currentObjective);
            state.currentObjective = currentObjective;
        },
        getListObjective(state, action) {
            const listObjective = action.payload;
            setLocalStorage("listObjective", listObjective);
            state.listObjective = listObjective;
        },
    },
});

export const objectiveReducer = objectiveSlice.reducer;
export const objectiveSliceActions = objectiveSlice.actions;
