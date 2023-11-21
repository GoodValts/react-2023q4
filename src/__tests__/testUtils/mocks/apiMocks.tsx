export const item = {
  id: 3,
  title: 'Samsung Universe 9',
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  brand: 'Samsung',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
};

export const results = {
  limit: 5,
  skip: 0,
  total: 1,
  products: [item],
};

export const nullResults = {
  limit: 5,
  skip: 0,
  total: 0,
  products: [],
};

export const paginationResults = {
  limit: 5,
  skip: 0,
  total: 20,
  products: [item],
};
