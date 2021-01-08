import logo from '../../images/logo.svg';
import styles from './Header.module.css';
export default function Header({ children }) {
  // console.log(children);
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      {children}
    </header>
  );
}
