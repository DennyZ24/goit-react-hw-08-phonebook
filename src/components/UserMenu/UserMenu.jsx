import { useSelector } from "react-redux";
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

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {userEmail}</span>
      <button type="button">
        Выйти
      </button>
    </div>
  )
}