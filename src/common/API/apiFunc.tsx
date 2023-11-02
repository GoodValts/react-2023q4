import { responseInterface } from '../../types/Interfaces';

const getFromApi = (
  searchValue: string,
  itemsPerPage: number,
  pageNumber: number
): Promise<responseInterface> => {
  const url = 'https://dummyjson.com/products';
  const limit = itemsPerPage.toString();
  const skip = ((pageNumber - 1) * itemsPerPage).toString();

  return fetch(`${url}/search?q=${searchValue}&limit=${limit}&skip=${skip}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}. ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.total > 0) {
        searchValue.length > 0
          ? localStorage.setItem('searchInputValue', searchValue)
          : localStorage.clear();
      }

      console.log('getFromApi data=', data);

      return data;
    });
};

export default getFromApi;
