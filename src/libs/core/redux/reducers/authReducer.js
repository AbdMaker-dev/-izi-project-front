import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'isLogin',
    initialState: {
        value: localStorage.getItem('token') ? true : false
    },
    reducers: {
        logIn: state => {
            state.value = true;
        },
        logOut: state => {
            state.value = false;
        },
        // manualauth: (state, action) => {
        //     state.value = action.payload
        // }
    }
})

export const selectAuth = state => state.isLogin.value;

// Action creators are generated for each case reducer function
export const { logIn, logOut } = slice.actions
export default slice.reducer;
