import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/reducer';
import authReducer from './reducers/authReducer';

export default configureStore({
    reducer: {
        counter: reducer,
        isLogin: authReducer
    },
});
