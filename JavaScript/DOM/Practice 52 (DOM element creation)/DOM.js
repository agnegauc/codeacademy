const box = document.createElement("div"); // could have been "main" instead of "div"
const imageContainer = document.createElement("div"); // not necessary, just "image" would have been enough
const image = document.createElement("img");
const userHeading = document.createElement("h1");
const userEmployment = document.createElement("h2");
const userLocation = document.createElement("h2");

document.body.style.backgroundColor = "rgb(217, 243, 255)";
box.style =
  "margin: 100px 50px; background-color: white; height: 500px; border-radius: 10px; text-align: center";
imageContainer.style =
  "height: 100px; width: 100px; background-color:red; border-radius: 50%; margin: 0 auto; border: 5px solid white; box-shadow: 0px 2px 10px 0px rgba(148,148,148,0.75); transform: translate(0,-20px)";
// Pakelti į viršų galima per minusinį marginTop vietoj transform
image.src =
  "http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg";
image.style =
  "height: 100%; width: 100%; object-fit: cover; border-radius: 50%";
userEmployment.style = ["color: grey"];
userLocation.style = ["color: grey"];

userHeading.textContent = "Trent Walton";
userEmployment.textContent = "Founder of @paravenlinc";
userLocation.textContent = "Austin, TX";

document.body.append(box);
document.body.querySelector("div").appendChild(imageContainer);
document.body.querySelector("div>div").append(image);
document.body.querySelector("div").append(userHeading);
document.body.querySelector("div").append(userEmployment);
document.body.querySelector("div").append(userLocation);
