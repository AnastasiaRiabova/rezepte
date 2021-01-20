import { useSelector } from 'react-redux';
import { useState } from 'react';
import selectors from '../../Redux/Recipe/recipe-selectors';
import styles from './NutrientsCount.module.css';

function NutrientsCount({ index }) {
  const [input, setInput] = useState('');
  const getRecipe = useSelector(selectors);

  function toCountNutrients(nutrient) {
    if (getRecipe && index) {
      return Math.round(
        (+input * nutrient) / Math.round(getRecipe[index].recipe.totalWeight),
      );
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className={styles.fontsStyle}>
      <p>
        Choose the Dish and <br />
        enter the quantity you prefer to eat:
      </p>
      <input
        id={styles.searchInput}
        type="text"
        name="input"
        value={input}
        placeholder="gram"
        onChange={handleInput}
      />
      {/* <p>{input && toCountNutrients()}</p> */}
      <p className={styles.letterStyle}>
        {getRecipe && index && getRecipe[index].recipe.label}
      </p>
      <p>
        Total Weight:
        <span className={styles.letterStyle}>
          {' '}
          {getRecipe &&
            index &&
            Math.round(getRecipe[index].recipe.totalWeight)}{' '}
          gr
        </span>
      </p>
      <p>
        Calories:
        <span className={styles.letterStyle}>
          {' '}
          {input
            ? toCountNutrients(Math.round(getRecipe[index].recipe.calories))
            : getRecipe &&
              index &&
              Math.round(getRecipe[index].recipe.calories)}{' '}
          kkal
        </span>
      </p>
      <p>
        Fat:
        <span className={styles.letterStyle}>
          {input
            ? toCountNutrients(
                Math.round(getRecipe[index].recipe.totalNutrients.FAT.quantity),
              )
            : getRecipe &&
              index &&
              Math.round(getRecipe[index].recipe.totalNutrients.FAT.quantity)}
          gr
        </span>
      </p>
      <p>
        Carbs:
        <span className={styles.letterStyle}>
          {input
            ? toCountNutrients(
                Math.round(
                  getRecipe[index].recipe.totalNutrients.CHOCDF.quantity,
                ),
              )
            : getRecipe &&
              index &&
              Math.round(
                getRecipe[index].recipe.totalNutrients.CHOCDF.quantity,
              )}{' '}
          gr
        </span>
      </p>
      <p>
        Protein:
        <span className={styles.letterStyle}>
          {input
            ? toCountNutrients(
                Math.round(
                  getRecipe[index].recipe.totalNutrients.PROCNT.quantity,
                ),
              )
            : getRecipe &&
              index &&
              Math.round(
                getRecipe[index].recipe.totalNutrients.PROCNT.quantity,
              )}{' '}
          gr
        </span>
      </p>
    </div>
  );
}
export default NutrientsCount;