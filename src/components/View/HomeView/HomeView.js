import { Formik, Form, Field } from 'formik';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import styles from '../RegistrationView/RegistrationView.module.css';
import Button from '../../UIComponents/Button/Button';
import getCalculatorInfo from '../../../Redux/Calculator/calculator-operations';
// import getUser from '../../../Redux/UserInfo/user-operation';
import selectorUser from '../../../Redux/UserInfo/user-selectors';
import selectorToken from '../../../Redux/Auth/auth-selectors';

const ValidationSchema = Yup.object().shape({
  weight: Yup.number('Must be a number')
    .positive(`Can't be negative`)
    .required('Required'),
  height: Yup.number('Must be a number')
    .positive(`Can't be negative`)
    .required('Required'),
  age: Yup.number('Must be a number')
    .positive(`Can't be negative`)
    .required('Required'),
  desiredWeight: Yup.number('Must be a number')
    .positive(`Can't be negative`)
    .required('Required'),
  bloodType: Yup.string().required('Required'),
});

export default function HomeView({ button }) {
  const userId = useSelector(selectorUser.userId);
  const isAuth = useSelector(selectorToken);
  // console.log(userId);
  // console.log(isAuth);
  const dispatch = useDispatch();
  const getWholeCalculatorInfo = useCallback(
    data => {
      dispatch(getCalculatorInfo(data, userId, isAuth));
    },
    [dispatch, userId, isAuth],
  );
  return (
    <div className={styles.position}>
      <h1 className={styles.titleView}>Calculate your daily calories now</h1>
      <Formik
        initialValues={{
          weight: '',
          height: '',
          age: '',
          desiredWeight: '',
          bloodType: 0,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          userId && isAuth && getWholeCalculatorInfo(values);
          console.log(isAuth);
          console.log(userId);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Weight *"
                  type="number"
                  className={styles.input}
                  name="weight"
                />
                {errors.weight && touched.weight ? (
                  <div className={styles.validation}>{errors.weight}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Height *"
                  type="number"
                  className={styles.input}
                  name="height"
                />{' '}
                {errors.height && touched.height ? (
                  <div className={styles.validation}>{errors.height}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Age *"
                  type="number"
                  className={styles.input}
                  name="age"
                />
                {errors.age && touched.age ? (
                  <div className={styles.validation}>{errors.age}</div>
                ) : null}
              </div>
              <div className={styles.fieldContainer}>
                <Field
                  placeholder="Desired weight *"
                  type="number"
                  className={styles.input}
                  name="desiredWeight"
                />
                {errors.desiredWeight && touched.desiredWeight ? (
                  <div className={styles.validation}>
                    {errors.desiredWeight}
                  </div>
                ) : null}
              </div>

              <h2 className={styles.titleView}> Blood type</h2>
              <div className={styles.fieldContainer}>
                <label>
                  {' '}
                  <Field
                    className={[styles.input, styles.none].join(' ')}
                    type="radio"
                    name="bloodType"
                    value="1"
                  />
                  <span>
                    <span className={styles.altenativeRadio}></span>1
                  </span>{' '}
                </label>
                <label>
                  {' '}
                  <Field
                    className={[styles.input, styles.none].join(' ')}
                    type="radio"
                    name="bloodType"
                    value="2"
                  />
                  <span>
                    <span className={styles.altenativeRadio}></span>2
                  </span>{' '}
                </label>
                <label>
                  {' '}
                  <Field
                    className={[styles.input, styles.none].join(' ')}
                    type="radio"
                    name="bloodType"
                    value="3"
                  />
                  <span>
                    <span className={styles.altenativeRadio}></span>3
                  </span>{' '}
                </label>
                <label>
                  {' '}
                  <Field
                    className={[styles.input, styles.none].join(' ')}
                    type="radio"
                    name="bloodType"
                    value="4"
                  />
                  <span>
                    <span className={styles.altenativeRadio}></span>4
                  </span>{' '}
                </label>
                {errors.bloodType && touched.bloodType ? (
                  <div className={styles.validation}>{errors.bloodType}</div>
                ) : null}
              </div>

              <Button label="Calculate" color="orange" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
      <Button onClick={button} label="Close" color="orange" type="submit" />
    </div>
  );
}
