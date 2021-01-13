import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UIComponents/Button/Button';
import CustomNavlink from '../../UIComponents/NavLink/CustomNavlink';
import Input from '../../UIComponents/Input/Input';
import operations from '../../../Redux/Auth/auth-operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./LoginView.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
export default function LoginView() {

  const dispatch = useDispatch();
  const onLogin = useCallback((data) => {
    dispatch(operations.logIn(data));
  }, [dispatch]);

  return (
    <div>
      LOGIN
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          await onLogin(values);
          resetForm()
        }}
      >
        {(({ errors, touched }) => <Form>
          <Field placeholder='Email' className={styles.input} name='email' />{errors.email && touched.email ? (<div>{errors.email}</div>) : null}
          <Field type='password' placeholder='Password' className={styles.input} name='password' />{errors.password && touched.password ? (<div>{errors.password}</div>) : null}
          <Button label="Login" color="orange" type="submit" />
        </Form>)}
      </Formik>
      <CustomNavlink to="/registration" label="Registration" color="orange" />
    </div>
  );
}

