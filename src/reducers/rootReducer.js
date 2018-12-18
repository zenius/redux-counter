import * as actionType from "./../constants/constants";
const initialState = {
  count: 0
};

const rootReducer = (state = initialState, action) => {
  console.log("action ", action);
  switch (action.type) {
    case actionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
export default rootReducer;
