const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsers = creteAsyncThunk('user/fetchUsers')

const userSlice = createSlice({
    name: 'user'
})