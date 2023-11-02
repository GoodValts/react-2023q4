import React, { useEffect, useState } from 'react';
import getFromApi from './common/API/apiFunc';
import BottomSection from './modules/bottom-section';
import TopSection from './modules/top-section';
import { ShipParams } from './types/Interfaces';

const App = () => {
  const [results, setResults] = useState<ShipParams[]>([]);
  const [loading, setLoading] = useState(false);
  const localStr = localStorage.getItem('searchInputValue') || '';

  const handleSearch = async (searchValue: string) => {
    try {
      setLoading(true);

      console.log('getFromApi start func');

      const apiResults = await getFromApi(searchValue);
      if (apiResults && apiResults.length > 0) {
        setResults(apiResults);
      } else {
        setResults([
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
        ]);
      }
    } catch (error) {
      throw new Error('failed to load from API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(localStr);
  }, [localStr]);

  return (
    <main>
      <header className="header">
        <h1 className="header__header">StarWars Ships</h1>
      </header>
      <TopSection onSearch={handleSearch} />
      <BottomSection results={results} />
      {loading && (
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
};

export default App;
