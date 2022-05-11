import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const {data} = await axios.post('users/signup', credentials);
    token.set(data.token)
    return data;
  } catch (error) {
    
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    return data;
  } catch (error) {
    
  }
})

const authOpreation = {
  register,
  login,
}
export default authOpreation;