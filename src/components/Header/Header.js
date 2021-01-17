import { NavLink } from 'react-router-dom';
import { useCallback } from 'react'
import logo from '../../images/logo.svg';
import styles from './Header.module.css';
import authOperation from '../../Redux/Auth/auth-operations'
import { useDispatch } from 'react-redux'
export default function Header({ children }) {
  const dispatch = useDispatch()
  const logout = useCallback(() => { dispatch(authOperation.logOut()) }, [dispatch])
  return (
    <header className={styles.header}>
      <NavLink to='/'> <img src={logo} alt="logo" /></NavLink>
      {children}
      <NavLink to='/' onClick={logout} >Logout</NavLink>
    </header>
  );
}
