const listOfNumbers = [1, 3, 3, 5, 5, 5];
const unique = listOfNumbers.filter(onlyUnique);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index; // checks if the given value is the first occurring. If not, it must be a duplicate and will not be copied.
}

console.log(unique);

// Another option to get unique values from the array:

let uniqueItems = [...new Set(listOfNumbers)]; // Set takes an Array and the spread operator "..." (to transform the set back into an Array)
console.log(uniqueItems);
