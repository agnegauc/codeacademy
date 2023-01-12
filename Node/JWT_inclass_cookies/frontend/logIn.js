const loginForm = document.body.querySelector("form#loginForm"); // form# - specifiškesnis būdas pasirinkti

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userNameInput = document.body.querySelector("input#userNameInput");
  const passwordInput = document.body.querySelector("input#passwordInput");

  const userName = userNameInput.value.trim();
  const password = passwordInput.value.trim();

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch("http://localhost:8000/sign-in", {
      method: "POST",
      headers,
      credentials: "include",
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    if (!res.ok || res.status >= 400) {
      return console.error("Could not fetch the login.");
    }

    const user = await res.json();

    // document.cookie += `accessToken=${user.token}; SameSite=None; Secure`;

    // alert("Login successful!");
    console.log(document.cookie);
    // window.location.assign("./content.html");
  } catch (error) {
    return console.error(error);
  }
});
