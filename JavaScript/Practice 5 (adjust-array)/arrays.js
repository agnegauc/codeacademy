const productPrices = [15, 50, 30, 20, 10.50];

productPrices.push(133); // pridėti 133 kaip papildomą elementą į masyvo galą. Nors ir const value, mes ją galėjom editint (būtent masyvą)

productPrices.shift(); // išima pirmąjį elementą iš masyvo

productPrices.pop(); // ištrina paskutinį

productPrices.unshift(-18); // prideda pirmą, bet LABAI nenašus

delete productPrices[3]; // NENAUDOTI! Vietoj 3 elemento atsiranda empty (bet ne ištrina); lenght lieka toks pat. 

productPrices.splice(1, 1); // nuo pirmo elemento ištrinti vieną.

console.log(productPrices);