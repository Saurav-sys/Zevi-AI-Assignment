import { faker } from '@faker-js/faker';
export const fetchLatestTrendData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const data = await response.json();

    const latestTrends = data.map((product) => ({
      productImg: product.image,
      productName: product.title,
    }));

    return latestTrends;
  } catch (error) {
    console.error('Error fetching latest trends:', error);
    return [];
  }
};

export const fetchSuggestionData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const data = await response.json();

    const suggestionData = data.map((product) => ({
      productName: product.title,
    }));

    return suggestionData;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
};


export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const products = data.map((product) => {
      const productOrgPrice = Number(faker.commerce.price({ min: 300, max: 5000 }));
      
      return {
        productImg: product.image,
        productName: product.title,
        productRating: faker.number.int({ min: 1, max: 5 }),
        productOrgPrice: Number(faker.commerce.price({ min: 300, max: 5000 })),
        productDisPrice:Number(
          faker.commerce.price({
            min: 300,
            max: Number(productOrgPrice),
          })
        ),
        productsReviews: faker.number.int({ min: 10, max: 50 }),
      };
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

