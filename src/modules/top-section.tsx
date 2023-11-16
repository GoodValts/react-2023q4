import { useState } from 'react';
import { selectSearchValue, setSearchValue } from '../common/redux/search';
import { setPage } from '../common/redux/viewMode';
import { useAppDispatch, useAppSelector } from '../hooks';

const TopSection = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  // const [searchString, setSearchString] = useState('');

  const [inputValue, setInputValue] = useState(searchValue);

  const [isError, setIsError] = useState(false);

  // const { setPage } = useContext(AppContext);
  // // const { setSearchStr } = useContext(ApiContext);

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue.trim()));
  };

  //  Redux
  // useEffect(() => {
  //   const value = localStorage.getItem('searchInputValue') || '';
  //   console.log('value=', value);
  //   dispatch(changeSearchStringAction(value));
  //   searchValue = value;
  // }, [dispatch]);

  if (isError) {
    throw new Error('Clicked on error button');
  }

  return (
    <section className="top-section">
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="button"
        onClick={(event) => {
          event.preventDefault();
          dispatch(setPage(1));
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
};

export default TopSection;
