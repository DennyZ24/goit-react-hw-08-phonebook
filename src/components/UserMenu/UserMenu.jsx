import { useDispatch, useSelector } from "react-redux";
import authOpreation from "redux/auth/auth-operation";
import authSelectors from "redux/auth/auth-selectors";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const userEmail = useSelector(authSelectors.getUserEmail)
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {userEmail}</span>
      <button type="button" onClick={()=>dispatch(authOpreation.logOut())}>
        Выйти
      </button>
    </div>
  )
}