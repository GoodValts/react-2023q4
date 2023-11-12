import { getFromApi, getItemFromApi } from '../src/common/API/apiFunc';

describe('API functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('getFromApi successfully receives data', async () => {
    const data = await getFromApi('test', 5, 1);
    expect(data).toEqual({
      products: [
        {
          id: 63,
          title: 'Royal Blue Premium Watch',
          description:
            'Men Silver Chain Royal Blue Premium Watch Latest Analog Watch',
          price: 50,
          discountPercentage: 2.56,
          rating: 4.89,
          stock: 142,
          brand: 'SKMEI 9117',
          category: 'mens-watches',
          thumbnail: 'https://i.dummyjson.com/data/products/63/thumbnail.webp',
          images: [
            'https://i.dummyjson.com/data/products/63/1.jpg',
            'https://i.dummyjson.com/data/products/63/2.jpg',
            'https://i.dummyjson.com/data/products/63/3.png',
            'https://i.dummyjson.com/data/products/63/4.jpeg',
          ],
        },
        {
          id: 64,
          title: 'Leather Strap Skeleton Watch',
          description:
            'Leather Strap Skeleton Watch for Men - Stylish and Latest Design',
          price: 46,
          discountPercentage: 10.2,
          rating: 4.98,
          stock: 61,
          brand: 'Strap Skeleton',
          category: 'mens-watches',
          thumbnail: 'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
          images: [
            'https://i.dummyjson.com/data/products/64/1.jpg',
            'https://i.dummyjson.com/data/products/64/2.webp',
            'https://i.dummyjson.com/data/products/64/3.jpg',
            'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
          ],
        },
      ],
      total: 2,
      skip: 0,
      limit: 2,
    });
  });

  it('getItemFromApi successfully receives data', async () => {
    const data = await getItemFromApi(64);
    expect(data).toEqual({
      id: 64,
      title: 'Leather Strap Skeleton Watch',
      description:
        'Leather Strap Skeleton Watch for Men - Stylish and Latest Design',
      price: 46,
      discountPercentage: 10.2,
      rating: 4.98,
      stock: 61,
      brand: 'Strap Skeleton',
      category: 'mens-watches',
      thumbnail: 'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/64/1.jpg',
        'https://i.dummyjson.com/data/products/64/2.webp',
        'https://i.dummyjson.com/data/products/64/3.jpg',
        'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
      ],
    });
  });
});
