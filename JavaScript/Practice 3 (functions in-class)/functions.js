// Example 1

function getMultipliedByTwo(number) {
    return number * 2; // return vietoj console.log, nes po console.log į nieką nežiūrėtų
}

const multipliedNumber = getMultipliedByTwo(5);

console.log(multipliedNumber);


// Example 2

function getDividedByTwo(number) {
    return number / 2;
}

const dividedNumber = getDividedByTwo(10);

console.log({ dividedNumber }); // apskliausti galima pažymint divideNumber + Shift + laužtinis skliaustas


// Example 3

function getTodaysSales(totalSales, totalSalesYest) { // skliaustuose - kintamasis (totalSales)
    const todaySales = totalSales - totalSalesYest;

    return todaySales;
}

console.log(getTodaysSales(100, 20));

// Example 4

function getTodaysSales(totalSales, totalSalesYest = 50) { // pasiims šitą reikšmę tik jei mes nepaduosim naujos reikšmės. Galima nurodyti čia ir abi vertes. Tuomet žemiau console.log(getTodaysSales());
    const todaySales = totalSales - totalSalesYest;

    return todaySales;
}

console.log(getTodaysSales(150));