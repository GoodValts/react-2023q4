import { Reducer } from 'redux';
import { AppState } from '../../../types/Interfaces';
import { changeSearchStringAction } from '../actions/changeSearchString';

type ChangeSearchStringAction = ReturnType<typeof changeSearchStringAction>;

const initialState = {
  value: '',
};

const searchStringReducer: Reducer<AppState, ChangeSearchStringAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_VALUE':
      localStorage.setItem('searchInputValue', state.value);
      console.log('searchReducer', state.value);
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default searchStringReducer;
