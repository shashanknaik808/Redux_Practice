const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', function () {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.data.map(function (user) {
                return user.id;
            });
        });
});

const userSlice = createSlice({
    name: 'user'
});