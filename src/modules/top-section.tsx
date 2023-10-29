import React from 'react';
import { TopSectionInterface } from '../types/Interfaces';

class TopSection extends React.Component<
  TopSectionInterface['props'],
  TopSectionInterface['state']
> {
  constructor(props: TopSectionInterface['props']) {
    super(props);
    this.state = {
      searchValue: this.checkInputValue(),
      isError: false,
    };
  }

  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
    console.log('!!!!!value', this.state.searchValue);
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

  throwError = () => {
    this.setState({
      ...this.state,
      isError: true,
    });
  };

  render(): React.ReactNode {
    if (this.state.isError) {
      throw new Error('Clicked on error button');
    } else {
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
          <button className="button" onClick={this.throwError}>
            Err btn
          </button>
        </section>
      );
    }
  }
}

export default TopSection;
