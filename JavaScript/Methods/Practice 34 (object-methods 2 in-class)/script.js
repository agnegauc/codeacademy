const company = {
  name: "Tesla",
  foundationDate: new Date("2020"),
  workers: 100,
  foundingCapital: 1_000_000,

  showCompanyData: function () {
    console.log(this.name); // this - reiškia "šio dalyko (objekto)". Jei parašytume tik "name" objekto viduje, negrąžintų nieko

    // Vietoj this galėjome rašyti "company.name"

    console.log(`We are ${this.name}`);
  },
};

console.log(company);

company.showCompanyData();
