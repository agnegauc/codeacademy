function Phone(hardware, processor, screenSize) {
  this.hardware = hardware; // this = dalykas, kuris yra būtent šiame objekte. Su arrow funkcijomis negalėtume naudoti this
  this.processor = processor;
  this.screenSize = screenSize;
}

const iPhone = new Phone("intel", "2.4Ghz", 7.1);

console.log(iPhone);

console.log({ iPhone }); // Another way to display in console

const phones = [];

for (let i = 0; i < 5; i++) {
  const cellphone = new Phone("intel", `${i} 2GHz`, i * 2); // paduodam parametrus skliaustuose, ${i} just to be fancy

  phones.push(cellphone);
}

console.log(phones);
