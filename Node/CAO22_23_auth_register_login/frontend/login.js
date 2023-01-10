const form = document.body.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = document.querySelector("#email-input").value.trim(); // also works: event.target.elements[0].value
  const passwordInputValue = document
    .querySelector("#password-input")
    .value.trim(); // also works: event.target.elements[1].value

  const user = {
    email: emailInputValue,
    password: passwordInputValue,
  };

  try {
    const response = await fetch("http://localhost:8000/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      document.body.querySelector("#login-form").reset();

      const data = await response.json();

      localStorage.setItem("token", data.token);

      // document.cookie = `id=${userData.id}`; <-- save sth to cookies Andrius' version

      window.location.assign("./index.html");
      return;
    }

    if (!response.ok || response.status >= 400) {
      const msg = await response.json();

      return alert(msg.error); // (msg.error || msg.statusText) if the latter exists
    }
  } catch (error) {
    alert(error.message); // returns "Failed to fetch"
  }
});
