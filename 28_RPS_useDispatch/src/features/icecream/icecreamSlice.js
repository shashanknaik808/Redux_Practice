import { createSlice } from '@reduxjs/toolkit'
import { oredered as cakeOrdered } from '../cake/cakeSlice'
const initialState = {
    numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: function (state) {
            state.numOfIcecreams--;
        },
        restocked: function (state, action) {
            state.numOfIcecreams += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--;
        });
    },
});


export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;