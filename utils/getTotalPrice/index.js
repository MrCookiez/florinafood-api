/**
 * @param {array} list of items
 * @returns {number} total
 */
const getTotalPrice = (products) => {
  if (products.length === 0) return null;
  if (products.length === 1) return products[0].price;

  const totalCost = products.reduce((total, product) => {
    return total += product.price;
  }, 0);

  return totalCost;
};

module.exports = getTotalPrice;