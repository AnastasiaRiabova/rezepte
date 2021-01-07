import { NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UIComponents/Button/Button';
import Input from '../../UIComponents/Input/Input';
import operation from '../../../Redux/Auth/auth-operations';

export default function RegistrationView() {
  const [username, setUsername] = useState('');
  const handleNameChange = e => setUsername(e.currentTarget.value);
  const [email, setEmail] = useState('');
  const handleLoginChange = e => setEmail(e.currentTarget.value);
  const [password, setPassword] = useState('');
  const handlePasswordChange = e => setPassword(e.currentTarget.value);

  const dispatch = useDispatch();
  const onRegistation = useCallback(() => {
    dispatch(operation.registration({ username, email, password }));
  }, [dispatch, username, email, password]);

  const handleOnsubmit = e => {
    e.preventDefault();
    // console.log(username, email, password);
    onRegistation();
    setPassword('');
    setUsername('');
    setEmail('');
  };
  return (
    <div>
      REGISTRATION
      <form onSubmit={handleOnsubmit}>
        <Input
          type="text"
          onChange={handleNameChange}
          placeholder="name"
          value={username}
        />
        <Input
          onChange={handleLoginChange}
          placeholder="login"
          type="text"
          value={email}
        />
        <Input
          onChange={handlePasswordChange}
          placeholder="password"
          type="password"
          value={password}
        />
        <Button label="Registration" color="orange" type="submit" />
      </form>
      <NavLink to="/registration">Login</NavLink>
    </div>
  );
}
