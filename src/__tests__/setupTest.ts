import '@testing-library/react';
import '@testing-library/jest-dom';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
  item,
  nullResults,
  paginationResults,
  results,
} from './testUtils/mocks/apiMocks';

export const handlers = [
  http.get('https://dummyjson.com/products/*', async () => {
    return HttpResponse.json(results);
  }),
  http.get('https://dummyjson.com/products/*', async () => {
    return HttpResponse.json(nullResults);
  }),
  http.get('https://dummyjson.com/products/*', async () => {
    return HttpResponse.json(item);
  }),
  http.get('https://dummyjson.com/products/*', async () => {
    return HttpResponse.json(paginationResults);
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
