import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import authOpreation from "redux/auth/auth-operation";
import authSelectors from "redux/auth/auth-selectors";
import Container from "./Container/Container";
import Navigation from "./Navigation/Navigation";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRout";
const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LogInView = lazy(() => import('views/LogInView'))
const RegiserView = lazy(()=>import('views/RegisterView'))

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
        <Suspense>
          <Routes>
          <Route path="/" element={<Container />}>
              <Route index element={<PublicRoute component={<HomeView/>}/>}/>
              <Route path="register" element={<PublicRoute restricted={true} component={<RegiserView />}/>} />
              <Route path="login" element={
              <PublicRoute restricted={true} component={<LogInView />} />} />
              <Route path="contacts" element={<PrivateRoute component={<ContactsView />} />} />
          </Route>
          </Routes>
          </Suspense>
          <ToastContainer/>
        </>
      }
    </div>
  );
};
