import { combineReducers } from "redux";
import BooksReducer from "./reducer-books";
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // import 
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;