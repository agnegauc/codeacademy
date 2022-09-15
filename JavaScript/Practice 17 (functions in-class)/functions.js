const bike = {
  price: 250, // price yra parametras, bike yra objektas
  primeCost: 150,
};

function calculateProfit(product) {
  const profit = product.price - product.primeCost; // Naudotis parametrais, kuriuos turime funkcijoje. Dėl to ne bike.price, o product.price

  return profit;
}

console.log(calculateProfit(bike));
document.body.innerHTML = calculateProfit(bike); // Bet kur bodyje atsiras. Jei ne bet kur - su querySelector
