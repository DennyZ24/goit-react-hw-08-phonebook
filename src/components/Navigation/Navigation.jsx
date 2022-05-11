import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { NavLink } from "react-router-dom";
import { AppBar } from "@mui/material";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import s from './Navigation.module.css'

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'white',
} 

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <AppBar position='relative' sx={{padding: '20px'}}>
      <nav className={s.navBar}>
        <div>
          <NavLink to='/'style={linkStyle}>Home</NavLink>
          {isLoggedIn && <NavLink to='contacts' style={linkStyle}>Contacts</NavLink>}
        </div>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </nav>
    </AppBar>
  )
}