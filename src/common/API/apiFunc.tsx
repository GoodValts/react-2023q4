import { ShipParams } from '../../types/sectionInterface';

const getFromApi = (searchValue: string): Promise<ShipParams[]> => {
  const url = 'https://swapi.dev/api';
  console.log('this.state.searchTerm=', searchValue);

  return fetch(`${url}/starships/?search=${searchValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}. ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log('data.count=', data.count);
      if (data.count > 0) {
        console.log('apifunc searchValue=', searchValue);
        searchValue.length > 0
          ? localStorage.setItem('searchInputValue', searchValue)
          : localStorage.clear();
      }
      console.log('data.results=', data.results);
      return data.results;
    });
};

// const getFromApi = (searchValue: string): Promise<ShipParams[]> => {
//   const url = 'https://rickandmortyapi.com/api';
//   console.log('this.state.searchTerm=', searchValue);

//   return fetch(`${url}/character/?name=${searchValue}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error ${response.status}. ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       // console.log('data.count=', data.count);
//       if (data.count > 0) {
//         console.log('apifunc searchValue=', searchValue);
//         searchValue.length > 0
//           ? localStorage.setItem('searchInputValue', searchValue)
//           : localStorage.clear();
//       }
//       console.log('data.results=', data.results);
//       return data.results;
//     });
// };

export default getFromApi;
