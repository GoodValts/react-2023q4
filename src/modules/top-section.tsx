import React from 'react';
import { TopSectionInterface } from '../types/sectionInterface';

class TopSection extends React.Component<
  TopSectionInterface['props'],
  TopSectionInterface['state']
> {
  constructor(props: TopSectionInterface['props']) {
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
