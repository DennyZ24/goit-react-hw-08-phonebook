import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import authOpreation from "redux/auth/auth-operation";
import authSelectors from "redux/auth/auth-selectors";
import Container from "./Container/Container";
import Navigation from "./Navigation/Navigation";
import ContactsView from "./views/ContactsView";
import HomeView from "./views/HomeView";
import LogInView from "./views/LogInView";
import RegiserView from "./views/RegisterView";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(authOpreation.refresh()) 
  }, [dispatch])
  

  return (
    <div>
      {!isRefreshing && 
        <>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<HomeView />} />
              <Route path="register" element={<RegiserView />} />
              <Route path="login" element={<LogInView />} />
              <Route path="contacts" element={<ContactsView />} /> 
            </Route>
          </Routes>
        </>
      }
    </div>
  );
};
