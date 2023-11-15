import { useRef } from 'react';
import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppContext from '../common/controllers/paginationContext';
import { changeSearchStringAction } from '../common/redux/actions/changeSearchString';
import { AppState } from '../types/Interfaces';

const TopSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const searchValue = useSelector((state: AppState) => state.value);
  // const [searchString, setSearchString] = useState('');

  const [isError, setIsError] = useState(false);

  const { setPage } = useContext(AppContext);
  // // const { setSearchStr } = useContext(ApiContext);

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value) {
      dispatch(changeSearchStringAction(inputRef.current.value));
    } else {
      dispatch(changeSearchStringAction(''));
    }
  };

  // Redux
  useEffect(() => {
    const value = localStorage.getItem('searchInputValue') || '';
    dispatch(changeSearchStringAction(value));
  }, [dispatch]);

  if (isError) {
    throw new Error('Clicked on error button');
  } else {
    return (
      <section className="top-section">
        <input
          ref={inputRef}
          className="input"
          type="text"
          placeholder="Search here..."
          value={searchValue}
        />
        <button
          className="button"
          onClick={(event) => {
            event.preventDefault();
            setPage(1);
            handleSearch();
          }}
        >
          Search
        </button>
        <button className="button" onClick={() => setIsError(true)}>
          Err btn
        </button>
      </section>
    );
  }
};

export default TopSection;
