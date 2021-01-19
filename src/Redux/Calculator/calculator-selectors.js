const dayliRate = state => state.calculator?.response?.dailyRate;
const nutrientsInfo = state => state.calculator?.myInfo;

const selectors = { dayliRate, nutrientsInfo };
export default selectors;
