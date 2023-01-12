const getContent = async () => {
  const accessToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("accessToken="))
    ?.split("=")[1];

  try {
    const response = await fetch("http://localhost:8000/home", {
      headers: { authorization: `Bearer ${accessToken}` },
    });

    if (response.status >= 400) {
      const msg = await response.json();

      return console.log(msg.error);
    }

    if (response.ok) {
      const data = await response.json();
      const output = document.body.querySelector("#output");
      output.textContent = data.msg;
      return;
    }
  } catch (error) {
    console.log(error.msg);
  }
};

await getContent();
