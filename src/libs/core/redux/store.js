import { configureStore } from '@reduxjs/toolkit'
import projets from './reducers/projetReducer';
import authReducer from './reducers/authReducer';
import users from './reducers/userReducer';

export default configureStore({
    reducer: {
        projets: projets,
        isLogin: authReducer,
        users: users
    },
});
