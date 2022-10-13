// Kad rodytų konsolėje, reikia sukurti async funkciją (doFetch); šiaip nereikėtų

const getTodos = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();

  console.log(response);

  return response;
};

getTodos(); // Kai dirbame modulyje, naudoti await prieš getTodos
