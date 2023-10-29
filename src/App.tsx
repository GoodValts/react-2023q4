import React from 'react';
import getFromApi from './common/API/apiFunc';
import BottomSection from './modules/bottom-section';
import TopSection from './modules/top-section';
import { AppInterface } from './types/Interfaces';

class App extends React.Component<
  AppInterface['props'],
  AppInterface['state']
> {
  localStr = localStorage.getItem('searchInputValue') || '';

  constructor(props: AppInterface['props']) {
    super(props);
    this.state = {
      results: [],
      loading: false,
    };
  }

  componentDidMount(): void {
    this.handleSearch(this.localStr);
  }

  handleSearch = async (searchValue: string) => {
    try {
      this.setState({ loading: true });

      const apiResults = await getFromApi(searchValue);
      if (apiResults && apiResults.length > 0) {
        this.setState({ results: apiResults });
      } else {
        this.setState({
          results: [
            {
              MGLT: 'n/d',
              cargo_capacity: 'n/d',
              cost_in_credits: 'n/d',
              crew: 'n/d',
              films: ['n/d'],
              length: 'n/d',
              manufacturer: 'n/d',
              max_atmosphering_speed: 'n/d',
              model: 'n/d',
              name: 'No ships with this params!',
              passengers: 'n/d',
              starship_class: 'n/d',
              url: '',
            },
          ],
        });
      }
    } catch (error) {
      throw new Error('failed to load from API');
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <main>
        <header className="header">
          <h1 className="header__header">StarWars Ships</h1>
        </header>
        <TopSection onSearch={this.handleSearch} />
        <BottomSection results={this.state.results} />
        {this.state.loading && (
          <div className="user-message">
            <img
              className="user-message__loading"
              src="/src/assets/loading.gif"
              alt="loading"
            />
          </div>
        )}
      </main>
    );
  }
}

export default App;
