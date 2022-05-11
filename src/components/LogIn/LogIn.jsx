import { useState } from "react";
import { useDispatch } from "react-redux";
import authOpreation from "redux/auth/auth-operation";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
    
      default:
        return
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOpreation.login({ email, password }));

    setEmail('');
    setPassword('');
  }

  return (
     <div>
      <h1>Страница логина</h1>

      <form  style={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"   
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  )
}