import { combineReducers } from 'redux';
import someReducer from './reducers/someReducer';

const rootReducer = combineReducers({
  someAction: someReducer,
});

export default rootReducer;
