import { useState, useEffect, useContext } from 'react';
import ApiContext from '../common/controllers/apiContext';
import AppContext from '../common/controllers/paginationContext';

const TopSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isError, setIsError] = useState(false);

  const { setPage } = useContext(AppContext);
  const { setSearchStr } = useContext(ApiContext);

  const searchHandle = () => {
    let resultValue: string;
    searchValue ? (resultValue = searchValue.trim()) : (resultValue = '');
    localStorage.setItem('searchInputValue', resultValue);
    setSearchStr(resultValue);
  };

  function checkLocalStorage() {
    const value = localStorage.getItem('searchInputValue');
    value ? setSearchValue(value) : setSearchValue('');
  }

  useEffect(() => {
    checkLocalStorage();
  }, []);

  if (isError) {
    throw new Error('Clicked on error button');
  } else {
    return (
      <section className="top-section">
        <input
          className="input"
          type="text"
          placeholder="Search here..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button
          className="button"
          onClick={(event) => {
            event.preventDefault();
            setPage(1);
            searchHandle();
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
