const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: function (state) {
            state.numOfIcecreams--
        },
        restocked: function (state, action) {
            state.numOfIcecreams += action.payload
        },
    },
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions