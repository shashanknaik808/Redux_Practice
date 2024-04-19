const store = require('./app/store.js');
const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(function () {
    console.log('Updated state', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();