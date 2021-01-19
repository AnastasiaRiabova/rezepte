const userId = state => state.user?.id;
const userName = state => state.user?.username;
const userWeight = state => state.user?.userData?.weight;
const userCalories = state => state.user?.userData?.dailyRate;
const userInfo = { userId, userName, userWeight, userCalories };
export default userInfo;
