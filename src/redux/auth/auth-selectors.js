const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getIsRefreshing = state => state.auth.isRefreshing;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getToken,
};

export default authSelectors;