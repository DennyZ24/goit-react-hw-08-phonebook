import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import authSelectors from "redux/auth/auth-selectors"

 
export default function PrivateRoute({component, navigateTo = '/register'}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={navigateTo}/>
}