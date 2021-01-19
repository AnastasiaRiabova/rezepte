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
      <div>
        {auth ? <p>Hi, {userName}</p> : null}
        {!auth ? (
          <nav>
            <NavLink activeStyle={{ color: 'red' }} to="/registration">
              Registration
            </NavLink>
            <NavLink to="/login" activeStyle={{ color: 'red' }}>
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
      <div>
        <ul className={styles.nutrientsList}>
          {auth && userWeight && (
            <li className={styles.itemStyle}>
              Protein:<p>{userWeight}gr</p>
            </li>
          )}
          {auth && userWeight && (
            <li className={styles.itemStyle}>
              Fat:<p>{userWeight}gr</p>
            </li>
          )}
          {auth && userWeight && (
            <li className={styles.itemStyle}>
              Carbs:<p>{userWeight * 3}gr</p>
            </li>
          )}
          {auth && userCalorien && (
            <li className={styles.itemStyle}>
              Calories:<p>{userCalorien}kkal</p>
            </li>
          )}
        </ul>
      </div>
      <Button
        onClick={toOpenMenu}
        color="orange"
        label="Calculate your daily Nutrients"
      />

      {menu && <HomeView button={toCloseMenu} />}
    </>
  );
}
