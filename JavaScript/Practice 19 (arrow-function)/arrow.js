// Simple function:

function showAlert() {
  alert("Message");
}

showAlert();

// Arrow-function:

const showPrompt = () => {
  prompt("Enter message");
};

showPrompt();

// Arrow-function ex. 2:

const getFive = () => 5;

console.log(getFive());

// Arrow-function ex. 3:

const getMultipliedByTwo = (value) => value * 2;

console.log(getMultipliedByTwo(10));
