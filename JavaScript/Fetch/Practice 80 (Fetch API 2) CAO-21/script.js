import { checkIfVIP } from "./checkIfVIP.js";

const fetchGuests = async () => {
  const response = await fetch(
    "https://boiling-reaches-93648.herokuapp.com/week-3/party"
  );
  const guests = await response.json();

  checkIfVIP(guests, "Kristupas Lapeika");
};

await fetchGuests();

/* CodeAcademy way to write the same:  

const fetchPartyGuests = async () => {
  try {
    const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');
    if (response.ok) {
      const guests = await response.json();
      checkIfPersonVIP(guests, 'Kristupas Lapeika')
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests(); */
