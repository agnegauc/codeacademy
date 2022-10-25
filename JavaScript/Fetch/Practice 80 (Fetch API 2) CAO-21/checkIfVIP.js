const checkIfVIP = (allGuests, guestName) => {
  const guest = allGuests.find((v) => (v.name = guestName)); // Looking for a certain guest among all guests, returning an object with the guest's details
  document.body.textContent = guest
    ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
    : `${guestName} not found in the guest list`;
};

export { checkIfVIP };
