const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice.js')
const icecreamReducer = require('../features/icecream/icecreamSlice.js')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    }
})

module.exports = store;