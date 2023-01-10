const form = document.body.querySelector("#register-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInputValue = event.target.elements[0].value.trim();
  const passwordInputValue = event.target.elements[1].value.trim();

  const user = {
    email: emailInputValue,
    password: passwordInputValue,
  };

  try {
    const response = await fetch("http://localhost:8000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      document.body.querySelector("#register-form").reset();

      alert("Registration successful. Please log in now!");

      window.location.assign("./login.html");
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
