import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import userSelector from '../../Redux/UserInfo/user-selectors';
import authSelector from '../../Redux/Auth/auth-selectors';
import Button from '../UIComponents/Button/Button';
import styles from './UserInfo.module.css';
import HomeView from '../View/HomeView/HomeView';
// import cross from '../../images/cross.svg';
// import burger from '../../images/burger.svg';
// import DropBox from '../DropBox/DropBox';

export default function UserInfo() {
  const [menu, setMenu] = useState(false);
  const auth = useSelector(authSelector);
  // const userWeight = false;
  const userName = useSelector(userSelector.userName);
  const userCalorien = useSelector(userSelector.userCalories);
  const userWeight = useSelector(userSelector.userWeight);

  // console.log(auth);

  function toOpenMenu() {
    setMenu(true);
  }
  function toCloseMenu() {
    setMenu(false);
  }

  return (
    <>
      <div className={styles.nutrientsList}>
        {auth ? <p className={styles.nutrientsList}>Hi, {userName}</p> : null}
        {!auth ? (
          <nav className={styles.navigationStyle}>
            <NavLink activeStyle={{ color: '#fc842d' }} to="/registration">
              Registration
            </NavLink>
            <NavLink to="/login" activeStyle={{ color: '#fc842d' }}>
              Login
            </NavLink>
          </nav>
        ) : null}
        {/* {menu ? (
        <img onClick={() => setMenu(!menu)} src={cross} alt="cross" />
      ) : (
        <img onClick={() => setMenu(!menu)} src={burger} alt="burger" />
      )}
      {menu ? <DropBox /> : null} */}
      </div>
      {auth && userWeight && (
        <ul className={styles.nutrientsList}>
          <li className={styles.itemStyle}>
            Protein:<p>{userWeight}gr</p>
          </li>
          <li className={styles.itemStyle}>
            Fat:<p>{userWeight}gr</p>
          </li>
          <li className={styles.itemStyle}>
            Carbs:<p>{userWeight * 3}gr</p>
          </li>
          <li className={styles.itemStyle}>
            Calories:<p>{Math.round(userCalorien)}kkal</p>
          </li>
        </ul>
      )}
      {auth && (
        <div className={userWeight ? null : styles.box}>
          <Button
            onClick={toOpenMenu}
            color="orange"
            label="Calculate your daily Nutrients"
          />
        </div>
      )}

      {menu && <HomeView button={toCloseMenu} />}
    </>
  );
}
