import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiInterface,
  productParams,
  responseInterface,
} from '../../types/Interfaces';

const url = 'https://dummyjson.com/products';

export const dummyjsonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getResults: builder.query<responseInterface, ApiInterface['getResults']>({
      query: ({ searchValue, itemsPerPage, page }) => {
        const limit = itemsPerPage.toString();
        const skip = ((page - 1) * itemsPerPage).toString();
        return `/search?q=${searchValue}&limit=${limit}&skip=${skip}`;
      },
    }),
    getItem: builder.query<productParams, ApiInterface['getItem']>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetResultsQuery, useGetItemQuery } = dummyjsonApi;
