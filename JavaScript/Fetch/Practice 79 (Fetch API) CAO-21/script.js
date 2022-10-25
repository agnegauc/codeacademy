import { displayProfile } from "./displayProfile.js";

const getProfileData = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const randomProfile = data.results[0]; // There's just one anyway + it's changing randomly

  displayProfile(randomProfile);
};

await getProfileData();

/* CodeAcademy way to write the same:  

const fetchRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
      const data = await response.json();
      renderUserCard(data.results[0]);
    }
  } catch(error) {
    console.error(error);
  }
};

fetchRandomUser(); */
