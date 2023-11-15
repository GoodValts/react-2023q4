import { combineReducers } from 'redux';
import searchStringReducer from './redux/reducers/searchStringReducer';

const rootReducer = combineReducers({
  saveToLocal: searchStringReducer,
});

export default rootReducer;
