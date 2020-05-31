const getTotalPrice = require('.');
const { product, productsList, emptyProductsList } = require('./data');

describe('Total cost of a single order', () => {
  it('Should return a number', () => {
    expect(getTotalPrice(productsList)).toEqual(7);
  });

  it('Should throw an error (empty list)', () => {
    expect(getTotalPrice(emptyProductsList)).toBe(null);
  });

  it('Should return current value', () => {
    expect(getTotalPrice(product)).toEqual(3.5);
  });
});