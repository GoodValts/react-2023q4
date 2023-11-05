import { useState, useEffect } from 'react';
import { TopSectionInterface } from '../types/Interfaces';

const TopSection = ({ onSearch }: TopSectionInterface['props']) => {
  const [searchValue, setSearchValue] = useState('');
  const [isError, setIsError] = useState(false);

  const searchHandle = () => {
    let resultValue: string;
    searchValue ? (resultValue = searchValue.trim()) : (resultValue = '');
    onSearch(resultValue);
  };

  function checkInputValue() {
    const value = localStorage.getItem('searchInputValue');
    value ? setSearchValue(value) : setSearchValue('');
  }

  useEffect(() => {
    checkInputValue();
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
            console.log('searchValue=', searchValue);
          }}
        />
        <button
          className="button"
          onClick={(event) => {
            console.log('click');
            event.preventDefault();
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
