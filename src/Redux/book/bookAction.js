import { buy_Book } from "./bookType";

 export const buyBook = (number=1) => {
  return {
    type: buy_Book,
    payload:number
  }
};
