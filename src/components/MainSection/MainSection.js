import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useCallback } from 'react';
import SearchForm from '../SearchForm/SearchForm';
// import HomeView from '../View/HomeView/HomeView';
import styles from './MainSection.module.css';
import getUser from '../../Redux/UserInfo/user-operation';
import selectors from '../../Redux/Auth/auth-selectors';

function MainSection() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectors);
  // console.log(isAuth);
  const getUserInfo = useCallback(() => isAuth && dispatch(getUser(isAuth)), [
    dispatch,
    isAuth,
  ]);
  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <div className={styles.position}>
      <SearchForm />
      {/* <HomeView /> */}
    </div>
  );
}
export default MainSection;
