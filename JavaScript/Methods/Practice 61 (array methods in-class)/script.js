// ToDo:
// 1) apsibrėžti vartotojus (objektai, nes juose galime talpinti n kiekį parametrų, kurie yra susiję): vardas, sutikimo versija;
// 2) reikia masyvo, kuriame yra visi vartotojai, sutikę su x versija, kitame - sutikę su y versija, dar kitame -  visiškai nesutikę.

// Jei reikia susikurti daug naujų objektų, kuriuose keisis reikšmės, tada reikia konstruktoriaus

// Susikuriame function constructor (object method?). Konstruktoriu įsidedame į arrow function vidų - tai geresnis programavimas; konstruktoriaus ir taip nenaudosim niekur kitur

const getConsumers = (consumerCount = 0) => {
  // Vėl priskiriame numatytąją reikšmę čia (pagal nutylėjimą)

  const consumers = []; // Susikuriame tuščią array, į kurį talpinsime naujus consumers

  function Consumer(firstName, agreedPrivacyPolicyVersion = null) {
    // Jei user nieko neįrašys (nieko nepermesim vėliau), tuomet ši reikšmė bus null (tai yra numatytoji reikšmė)
    this.firstName = firstName;
    this.agreedPrivacyPolicyVersion = agreedPrivacyPolicyVersion;
  }

  const getRandomName = (randomNumber) => {
    switch (randomNumber) {
      case 0:
        return "Tomas"; // galima daryti break'ą, bet taip našiau
      case 1:
        return "Jonas";
      case 2:
        return "Andrius";
      case 3:
        return "Kamile";
      case 4:
        return "Simona";
      case 5:
        return "Irma";
      default:
        return null;
    }
  };

  for (let index = 0; index < consumerCount; index++) {
    const randomNumber = Math.round(Math.random() * 5);
    const firstName = getRandomName(randomNumber);
    const agreedPrivacyPolicyVersion =
      randomNumber <= 0.1 ? null : randomNumber + 0.1; // nepamiršti, kad tokia galimybė yra rašyti if'us!
    const consumer = new Consumer(firstName, agreedPrivacyPolicyVersion);

    consumers.push(consumer);
  }
  return consumers;
};

const consumers = getConsumers(30);
const consumersAgreedToPrivacyPolicy = [];
const consumersNotAgreedToPrivacyPolicy = [];

// Šiaip galime naudoti filter, bet kadangi mums nereikia nieko grąžinti (nes pushinsim į tuščius arrays aukščiau), tai geriau naudoti metodą, kuris nieko negražina, i.e. forEach
consumers.forEach((consumer) => {
  if (consumer.agreedPrivacyPolicyVersion > 3) {
    consumersAgreedToPrivacyPolicy.push(consumer);
  } else {
    consumersNotAgreedToPrivacyPolicy.push(consumer);
  }
});

console.log({
  consumersAgreedToPrivacyPolicy,
  consumersNotAgreedToPrivacyPolicy,
});
