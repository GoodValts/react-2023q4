import React from 'react';

interface TopSectionProps {
  onSearch: (searchTerm: string) => void;
}

interface TopSectionState {
  searchValue: string;
}

class TopSection extends React.Component<TopSectionProps, TopSectionState> {
  constructor(props: TopSectionProps) {
    super(props);
    this.state = {
      searchValue: this.checkInputValue(),
    };
  }

  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  checkInputValue = (): string => {
    const value = localStorage.getItem('searchInputValue');
    if (value) return value;

    return '';
  };

  searchHandle = () => {
    const requestStr = this.state.searchValue.trim();
    this.props.onSearch(requestStr);
  };

  render(): React.ReactNode {
    return (
      <section className="top-section">
        <input
          className="input"
          type="text"
          placeholder="Search here..."
          value={this.state.searchValue}
          onChange={this.inputChange}
        />
        <button className="button" onClick={this.searchHandle}>
          Search
        </button>
      </section>
    );
  }
}

export default TopSection;
