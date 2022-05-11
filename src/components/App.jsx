import { Routes, Route } from "react-router-dom";
import Container from "./Container/Container";
import Navigation from "./Navigation/Navigation";
import ContactsView from "./views/ContactsView";
import HomeView from "./views/HomeView";
import LogInView from "./views/LogInView";
import RegiserView from "./views/RegisterView";

export const App = () => {

  return (
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
  );
};
