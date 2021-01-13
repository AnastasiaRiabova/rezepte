import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UIComponents/Button/Button';
import Input from '../../UIComponents/Input/Input';
import operation from '../../../Redux/Auth/auth-operations';
import CustomNavlink from '../../UIComponents/NavLink/CustomNavlink';
import { ValidationSchemaExample } from '../../Formik';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationView.module.css'
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});


export default function RegistrationView() {
  // const [username, setUsername] = useState('');
  // const handleNameChange = e => setUsername(e.currentTarget.value);
  // const [email, setEmail] = useState('');
  // const handleLoginChange = e => setEmail(e.currentTarget.value);
  // const [password, setPassword] = useState('');
  // const handlePasswordChange = e => setPassword(e.currentTarget.value);

  const dispatch = useDispatch();
  const onRegistation = useCallback((data) => {
    dispatch(operation.registration(data));
  }, [dispatch]);

  const handleOnsubmit = e => {
    e.preventDefault();
    // console.log(username, email, password);
    onRegistation();
    // setPassword('');
    // setUsername('');
    // setEmail('');
  };
  return (
    <div>
      REGISTRATION
      <Formik
        initialValues={{
          name: "",
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          // same shape as initial values
          await onRegistation(values)
          console.log(values);
          resetForm()
        }}
      >
        {(({ errors, touched }) => <Form>
          <Field placeholder='Name' className={styles.input} name='name' />{errors.name && touched.name ? (<div>{errors.name}</div>) : null}
          <Field placeholder='Email' className={styles.input} name='email' />{errors.email && touched.email ? (<div>{errors.email}</div>) : null}
          <Field placeholder='Password' className={styles.input} name='password' />{errors.password && touched.password ? (<div>{errors.password}</div>) : null}
          <Button label="Registration" color="orange" type="submit" />
        </Form>)}
      </Formik>
      {/* <form onSubmit={handleOnsubmit}>
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
      </form> */}
      <CustomNavlink to="/registration" label='Login' color='orange' />
      <ValidationSchemaExample />
    </div>
  );
}
