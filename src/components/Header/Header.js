import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';
import authOperation from '../../Redux/Auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import authSelect from '../../Redux/Auth/auth-selectors';

export default function Header({ children }) {
  const auth = useSelector(authSelect);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(authOperation.logOut());
  }, [dispatch]);
  return (
    <header className={auth ? styles.header : styles.header2}>
      <NavLink to="/login">
        {' '}
        <img src={logo} alt="logo" />
      </NavLink>
      {children}
      {auth && (
        <NavLink to="/login" onClick={logout}>
          Logout
        </NavLink>
      )}
    </header>
  );
}
