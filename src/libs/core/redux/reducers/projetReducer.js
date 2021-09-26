import { createSlice } from '@reduxjs/toolkit';

export const projetslice = createSlice({
    name: 'projets',
    initialState: {
        value: []
    },
    reducers: {
        allProjet: (state, action) => {
            state.value = action.payload;
        },
        addProjet: (state, action) => {
            state.value.push(action.payload);
        },
        deletProjet: (state, action) => {
            for (const elt in state.value) {
                if (elt.id === action.payload) {
                    const index = state.value.indexOf(elt);
                    state.value.splice(index, 1);
                    break;
                }
            }
        },
    }
})

export const selectProjets = state => state.projets.value;

// Action creators are generated for each case reducer function
export const { allProjet, addProjet, deletProjet } = projetslice.actions

export default projetslice.reducer;
