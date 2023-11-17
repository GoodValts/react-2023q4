import { useState } from 'react';
import {
  selectSearchValue,
  setSearchValue,
} from '../common/redux/reducers/search';
import { selectPage, setPage } from '../common/redux/reducers/viewMode';
import { useAppDispatch, useAppSelector } from '../common/redux/hooks/appHooks';
import { useNavigate } from 'react-router-dom';

const TopSection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const page = useAppSelector(selectPage);

  const [inputValue, setInputValue] = useState(searchValue);

  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue.trim()));
    dispatch(setPage(1));
    inputValue.length > 0
      ? navigate(`/search=${inputValue}&page=${page}`)
      : navigate(`/`);
  };

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
