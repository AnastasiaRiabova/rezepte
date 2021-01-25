import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Button from '../../UIComponents/Button/Button';
import CustomNavlink from '../../UIComponents/NavLink/CustomNavlink';
import operations from '../../../Redux/Auth/auth-operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './LoginView.module.css';
import selectors from '../../../Redux/Loader/loading-selectors';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export default function LoginView() {
  const dispatch = useDispatch();
  const onLogin = useCallback(
    data => {
      dispatch(operations.logIn(data));
    },
    [dispatch],
  );
  const isLoading = useSelector(selectors);
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          await onLogin(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <div className={styles.formContainer}>
              <div className={styles.fieldContainer}>
                <Field
                  autoComplete="off"
                  placeholder="Email"
                  className={styles.input}
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div className={styles.validation}>{errors.email}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                  name="password"
                />
                {errors.password && touched.password ? (
                  <div className={styles.validation}>{errors.password}</div>
                ) : null}
              </div>
            </div>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <div className={styles.controls}>
                <Button label="Login" color="orange" type="submit" />
                <CustomNavlink
                  to="/registration"
                  label="Registration"
                  color="orange"
                />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
