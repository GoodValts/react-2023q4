import { useState } from 'react';
import getFromApi from './common/API/apiFunc';
import BottomSection from './modules/bottom-section';
import TopSection from './modules/top-section';
import { ShipParams } from './types/sectionInterface';

function App() {
  const [results, setResults] = useState<ShipParams[]>([]);

  const handleSearch = async (searchValue: string) => {
    try {
      const apiResults = await getFromApi(searchValue);
      console.log('searchValue app.tsx', searchValue);
      console.log('apiResults app.tsx', apiResults);
      if (apiResults) {
        setResults(apiResults);
        console.log('useState results=', apiResults);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <header className="header">
        <h1 className="header__header">StarWars Ships</h1>
      </header>
      <TopSection onSearch={handleSearch} />
      <BottomSection results={results} />
    </main>
  );
}

export default App;
