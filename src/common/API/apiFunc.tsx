import { ShipParams } from '../../types/Interfaces';

const getFromApi = (searchValue: string): Promise<ShipParams[]> => {
  const url = 'https://swapi.dev/api';

  return fetch(`${url}/starships/?search=${searchValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}. ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.count > 0) {
        searchValue.length > 0
          ? localStorage.setItem('searchInputValue', searchValue)
          : localStorage.clear();
      }
      return data.results;
    });
};

export default getFromApi;
