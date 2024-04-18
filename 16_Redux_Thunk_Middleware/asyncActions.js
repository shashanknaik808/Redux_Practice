const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUESTED,
    };
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
}

function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
}

function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message));
            });
    };
}

function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
    }
}

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, logger.default)
);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(fetchUsers());