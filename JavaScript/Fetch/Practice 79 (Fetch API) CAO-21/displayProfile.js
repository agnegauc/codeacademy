const displayProfile = (profile) => {
  const img = document.createElement("img");
  const description = document.createElement("h4");
  const emailAddress = document.createElement("h5");
  const container = document.createElement("div");

  img.src = profile.picture.large;
  img.alt = `${profile.name.first}'s profile picture`;
  description.textContent = `${profile.name.first} ${profile.name.last}, ${profile.dob.age}`;
  emailAddress.textContent = profile.email;

  container.append(img, description, emailAddress);
  document.body.append(container);
};

export { displayProfile };
