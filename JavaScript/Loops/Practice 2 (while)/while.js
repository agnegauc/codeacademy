let productCount = 5;
while (productCount > 0) {
    console.log(`Kiekis: ${productCount}`);
    productCount--; // be šito (bet su tokia pat sąlyga) užlagins kompas, nes by default (gal) prideda po vieną ir dėl to varo iki begalybės
}