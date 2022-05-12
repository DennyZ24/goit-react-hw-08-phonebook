const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getIsRefreshing = state => state.auth.isRefreshing;
const getToken = state => state.auth.token;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getToken,
  getError
};

export default authSelectors;