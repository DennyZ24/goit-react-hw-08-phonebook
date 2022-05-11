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

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      
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
    dispatch(authOpreation.register({name,email,password}));
  }

  return (
     <div>
      <h1>Страница регистрации</h1>

      <form  style={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <label style={styles.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange} />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}