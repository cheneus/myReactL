import { combineReducers } from "redux";
import BooksReducer from "./reducer-books";

const rootReducer = combineReducers({
  // import 
  books: BooksReducer
});

export default rootReducer;
