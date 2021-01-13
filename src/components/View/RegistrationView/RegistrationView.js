import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UIComponents/Button/Button';
import Input from '../../UIComponents/Input/Input';
import operation from '../../../Redux/Auth/auth-operations';
import CustomNavlink from '../../UIComponents/NavLink/CustomNavlink';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationView.module.css'

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export default function RegistrationView() {
  const dispatch = useDispatch();
  const onRegistation = useCallback((data) => {
    dispatch(operation.registration(data));
  }, [dispatch]);
  return (
    <div>
      <h1 className={styles.title}>REGISTRATION</h1>
      <Formik
        initialValues={{
          username: "",
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          await onRegistation(values)
          resetForm()
        }}
      >
        {(({ errors, touched }) => <Form>
          <div className={styles.formContainer}>
            <div className={styles.fieldContainer}>
              <Field placeholder='Name *' className={styles.input} name='username' />{errors.username && touched.username ? (<div className={styles.validation}>{errors.username}</div>) : null}
            </div>
            <div className={styles.fieldContainer}>
              <Field placeholder='Email *' className={styles.input} name='email' /> {errors.email && touched.email ? (<div className={styles.validation}>{errors.email}</div>) : null}
            </div>
            <div className={styles.fieldContainer}>
              <Field placeholder='Password *' type='password' className={styles.input} name='password' />{errors.password && touched.password ? (<div className={styles.validation}>{errors.password}</div>) : null}</div>
          </div>
          <div className={styles.controls}>
            <Button label="Registration" color="orange" type="submit" />
            <CustomNavlink to="/registration" label='Login' color='white' />
          </div>
        </Form>)}
      </Formik>
    </div>
  );
}
