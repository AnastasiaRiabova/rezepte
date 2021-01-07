import { NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UIComponents/Button/Button';
import CustomNavlink from '../../UIComponents/NavLink/CustomNavlink';
import Input from '../../UIComponents/Input/Input';
import operations from '../../../Redux/Auth/auth-operations';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const handleNameChange = e => setEmail(e.currentTarget.value);
  const [password, setPassword] = useState('');
  const handlePasswordChange = e => setPassword(e.currentTarget.value);

  const dispatch = useDispatch();
  const onLogin = useCallback(() => {
    dispatch(operations.logIn({ email, password }));
  }, [dispatch, email, password]);

  const handleOnsubmit = e => {
    e.preventDefault();
    onLogin();
    setPassword('');
    setEmail('');
  };
  return (
    <div>
      LOGIN
      <form onSubmit={handleOnsubmit}>
        <Input
          onChange={handleNameChange}
          placeholder="name"
          type="text"
          value={email}
        />
        <Input
          onChange={handlePasswordChange}
          placeholder="password"
          type="password"
          value={password}
        />
        {/* <button onClick={handleOnsubmit} type='submit'>Login</button> */}
        <Button color="white" label="Login" type="submit" />
      </form>
      <NavLink to="/registration">Registration</NavLink>
      <CustomNavlink to="/" label="nav" color="orange" />
    </div>
  );
}
