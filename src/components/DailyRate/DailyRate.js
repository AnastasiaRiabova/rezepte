import { useSelector } from 'react-redux';
import selector from '../../Redux/Calculator/calculator-selectors';
import styles from './DailyRate.module.css';

export default function DailyRate() {
  const dailyRate = useSelector(selector.dayliRate);
  const nutrientInfo = useSelector(selector.nutrientsInfo);
  // console.log(nutrientInfo);
  return (
    <>
      <div className={styles.fontsStyle}>
        {dailyRate && <p>Your daily Calories: {dailyRate} kkal</p>}
        {nutrientInfo && <p>Daily Protein: {nutrientInfo.weight} gramm </p>}
        {nutrientInfo && <p>Daily Fat: {nutrientInfo.weight}gramm</p>}
        {nutrientInfo && <p>Daily Carbc: {nutrientInfo.weight * 3} gramm</p>}
      </div>
    </>
  );
}
