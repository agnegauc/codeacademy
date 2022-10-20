const doFetch = async (amount) => {
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
  };

  const users = await getUsers();

  console.log(users.slice(0, amount));
};

doFetch(5);

// Without the set number of elements, simple fetch would look like this:

// const getUsers = async () => {
//   const response = await fetch("https://api.github.com/users");
//   const users = await response.json();

//   console.log(users);
// };

// getUsers();
