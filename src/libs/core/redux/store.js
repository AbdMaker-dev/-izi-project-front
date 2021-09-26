import { configureStore } from '@reduxjs/toolkit'
import projets from './reducers/projetReducer';
import authReducer from './reducers/authReducer';

export default configureStore({
    reducer: {
        projets: projets,
        isLogin: authReducer
    },
});
