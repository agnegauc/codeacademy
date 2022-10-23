/* Į localStorage įrašyti vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. 
Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite. */

const userProfile = {
  firstName: "Agne",
  lastName: "Gauciute",
  picture: "https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg",
  description: "Very good student",
};

localStorage.setItem("profile", JSON.stringify(userProfile)); // JSON.stringify atbulinis veiksmas yra JSON.parse

const displayProfile = (profileObject) => {
  const heading = document.createElement("h1");
  const description = document.createElement("p");
  const image = document.createElement("img");

  heading.textContent = `${profileObject.firstName} ${profileObject.lastName}`; // add two at once
  description.textContent = profileObject.description;

  image.src = profileObject.picture;
  image.alt = "sad picture";
  image.width = "200"; // does not work if you add 'px'

  document.body.append(heading, image, description); // can append body with all at once
};

const profileObjectFromLocalStorage = JSON.parse(
  localStorage.getItem("profile")
); // retrieves info from local storage

// console.log(profileObjectFromLocalStorage.firstName); // returns just "Agne" so profileObjectFromLocalStorage is exactly the same as userProfile object.

displayProfile(profileObjectFromLocalStorage);
