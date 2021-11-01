import { createSlice } from '@reduxjs/toolkit';

export const userslice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        allUsers: (state, action) => {
            state.value = action.payload;
        },
        addUser: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const selectUsers = state => state.users.value;

// Action creators are generated for each case reducer function
export const { allUsers, addUser } = userslice.actions

export default userslice.reducer;
