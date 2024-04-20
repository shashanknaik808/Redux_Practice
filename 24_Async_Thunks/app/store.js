const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice.js')
const icecreamReducer = require('../features/icecream/icecreamSlice.js')


// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store;