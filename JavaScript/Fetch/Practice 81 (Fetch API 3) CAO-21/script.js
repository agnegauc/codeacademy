import { displayGuests } from "./displayGuests.js";

const getGuests = async () => {
  const response = await fetch(
    "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
  );
  const guests = await response.json();

  displayGuests(guests);
};

await getGuests();

/* CodeAcademy way to write the same:

const fetchPartyGuests = async () => {
  try {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding');
    if (response.ok) {
      const guests = await response.json();
      displayGuests(guests);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests();

*/
