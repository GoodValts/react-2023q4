import { useState } from "react";

const TopSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    console.log(`search ${inputValue}`);
  };

  if (isError) {
    throw new Error("Clicked on error button");
  }

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
        onClick={() => setIsError(true)}
        data-testid="error-button"
      >
        Err btn
      </button>
    </section>
  );
};

export default TopSection;
