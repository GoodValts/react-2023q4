import { productParams, responseInterface } from '../../types/Interfaces';

export const getFromApi = (
  searchValue: string,
  itemsPerPage: number,
  pageNumber: number
): Promise<responseInterface> => {
  const url = 'https://dummyjson.com/products';
  const limit = itemsPerPage.toString();
  const skip = ((pageNumber - 1) * itemsPerPage).toString();

  return fetch(
    `${url}/search?q=${searchValue}&limit=${limit}&skip=${skip}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}. ${response.statusText}`);
    }
    return response.json();
  });
  // .then((data) => {
  //   if (data.total > 0) {
  //     searchValue.length > 0
  //       ? localStorage.setItem('searchInputValue', searchValue)
  //       : localStorage.setItem('searchInputValue', '');
  //   }

  //   return data;
  // });
};

export const getItemFromApi = (id: number): Promise<productParams> => {
  const url = 'https://dummyjson.com/products';

  return fetch(`${url}/${id.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}. ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
