import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import authSelectors from "redux/auth/auth-selectors"

export default function PublicRoute({ component, naviganeTo = '/contacts', restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to = {naviganeTo}/> : component
}

