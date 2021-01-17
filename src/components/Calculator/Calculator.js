import { useSelector } from 'react-redux';
import { useState } from 'react';
import selectors from '../../Redux/Recipe/recipe-selectors';

function Calculator({ index }) {
  const [input, setInput] = useState('');
  const getRecipe = useSelector(selectors);

  //   if (getRecipe && index) {
  //   console.log(index);
  //     console.log(getRecipe[index].recipe.calories);
  //   }
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
    <>
      <div>Calculator</div>
      <input type="text" name="input" value={input} onChange={handleInput} />
      {/* <p>{input && toCountNutrients()}</p> */}
      <p>{getRecipe && index && getRecipe[index].recipe.label}</p>
      <p>
        Total Weight:
        {getRecipe &&
          index &&
          Math.round(getRecipe[index].recipe.totalWeight)}{' '}
        gramm
      </p>
      <p>
        Calories:
        {input
          ? toCountNutrients(Math.round(getRecipe[index].recipe.calories))
          : getRecipe &&
            index &&
            Math.round(getRecipe[index].recipe.calories)}{' '}
        kkal
      </p>
      <p>
        Fat:
        {input
          ? toCountNutrients(
              Math.round(getRecipe[index].recipe.totalNutrients.FAT.quantity),
            )
          : getRecipe &&
            index &&
            Math.round(
              getRecipe[index].recipe.totalNutrients.FAT.quantity,
            )}{' '}
        gramm
      </p>
      <p>
        Carbs:
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
        gramm
      </p>
      <p>
        Protein:
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
        gramm
      </p>
      <button>
        <a
          href={getRecipe && index && getRecipe[index].recipe.url}
          target="_blanc"
        >
          Open whole recipe
        </a>
      </button>
    </>
  );
}
export default Calculator;
