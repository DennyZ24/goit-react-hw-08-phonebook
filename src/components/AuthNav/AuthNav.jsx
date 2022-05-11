import { NavLink } from "react-router-dom";

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'white',
} 

export default function AuthNav() {
  return (
    <div>
      <NavLink to='register'style={linkStyle}>Sign in</NavLink>
      <NavLink to='login'style={linkStyle}>Log in</NavLink>
    </div>
  )
}