import { createSlice } from '@reduxjs/toolkit';
import authOpreation from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOpreation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOpreation.register.rejected](state, action) {
      state.error = action.payload
    },
    [authOpreation.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOpreation.login.rejected](state, action) {
      state.error = action.payload
    },
    [authOpreation.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOpreation.logOut.rejected](state, action) {
      state.error = action.payload
    },
    [authOpreation.refresh.pending](state) {
      state.isRefreshing = true;
    },
    [authOpreation.refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOpreation.refresh.rejected](state, action) {
      state.isRefreshing = false;
    }
  }

});

export default authSlice.reducer;