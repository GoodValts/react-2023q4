import { useAppDispatch } from "@/store/hooks/appHooks";
import { setSearchValue } from "@/store/reducers/search";
import { setPage } from "@/store/reducers/viewMode";
import { useState } from "react";

const TopSection = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchValue(inputValue.trim());
    setPage(1);
  };

  return (
    <section className="top-section">
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        data-testid="search-input"
      />
      <button
        className="button"
        onClick={(event) => {
          event.preventDefault();
          handleSearch();
        }}
        data-testid="search-button"
      >
        Search
      </button>
      <button
        className="button"
        onClick={() => {
          throw new Error("Clicked on error button");
        }}
        data-testid="error-button"
      >
        Err btn
      </button>
    </section>
  );
};

export default TopSection;
