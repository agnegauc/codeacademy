// Good return:

const getLotteryTicketNumberGood = () => {
  const randomNumber = Math.random();
  let randomLetter;

  if (randomNumber > 0.5) {
    randomLetter = "A";
  } else {
    randomLetter = "B";
  }

  return `${randomNumber} ${randomLetter}`;
};

console.log(getLotteryTicketNumberGood());

// Bad return (do not use!):

const getLotteryTicketNumberBad = () => {
  const randomNumber = Math.random();
  let randomLetter;
  console.log(randomNumber);
  if (randomNumber > 0.5) {
    randomLetter = "A";
    return;
  }

  randomLetter = "B";

  return `${randomNumber} ${randomLetter}`;
};

console.log(getLotteryTicketNumberBad());
