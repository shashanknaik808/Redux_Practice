const store = require('./app/store.js');
const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice.js').icecreamActions

console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(function () {
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

unsubscribe();