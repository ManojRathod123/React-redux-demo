import { buy_Book } from "./bookType";

// Store initial
const initialState = {
  numberofbooks: 200,
};

// create reducer. // reducer one kind of shopkeper who is maintain the all records. 
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_Book: return {
        ...state,
        numberofbooks: state.numberofbooks - action.payload,
      }
    default:
      return state;
  }
};

export default bookReducer;
