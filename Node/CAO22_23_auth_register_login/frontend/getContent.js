// Sujungta su backend, not backend_inclass_version
const getContent = async () => {
  try {
    const response = await fetch("http://localhost:8000/v1/content", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
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
