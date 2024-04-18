const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
    }
}