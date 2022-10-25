/* Atvaizduokite lentelėje: vardą, plusOne ir attending (plusOne ir attending ne true/false, bet "+" arba "-") */

const displayGuests = (guestList) => {
  const tbody = document.querySelector("tbody");
  guestList.forEach((oneGuest) => {
    const name = document.createElement("td");
    const attending = document.createElement("td");
    const plusOne = document.createElement("td");
    const tr = document.createElement("tr");

    name.textContent = oneGuest.name; // not guestList.name! We're going through each OBJECT in an array and object here is oneGuest!
    attending.textContent = oneGuest.attending ? "+" : "-"; // if true - display plus, if false - display a minus
    plusOne.textContent = oneGuest.plusOne ? "+" : "-";

    tr.append(name, attending, plusOne);
    tbody.append(tr);
  });
};

export { displayGuests };

// const displayGuests = (guests) => {
//   const tbody = document.querySelector('tbody');
//   guests.forEach(guest => {
//     const name = document.createElement('td');
//     name.innerText = guest.name;

//     const attending = document.createElement('td');
//     attending.innerText = guest.attending ? '+' : '-';

//     const plusOne = document.createElement('td');
//     plusOne.innerText = guest.plusOne ? '+' : '-';

//     const tr = document.createElement('tr');
//     tr.append(name, attending, plusOne);
//     tbody.append(tr);
//   })
// }
