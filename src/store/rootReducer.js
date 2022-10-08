const { combineReducers, configureStore } = require('@reduxjs/toolkit');
const { authReducer } = require('~/services/auth/authSlice');
const { keyResultReducer } = require('~/services/keyResult/keyResultSlice');
const { objectiveReducer } = require('~/services/objective/objectiveSlice');
const { settingReducer } = require('~/services/setting/settingSlice');
const { userReducer } = require('~/services/user/userSlice');

const reducer = combineReducers({
    auth: authReducer,
    setting: settingReducer,
    user: userReducer,
    objective: objectiveReducer,
    keyResult: keyResultReducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
