const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

const initialState = {
    numOfCakes: 10,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCkaes: state.numOfCakes + action.payload,
            }

        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(function () {
    console.log('Update state', store.getState());
});

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

unsubscribe()