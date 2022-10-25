const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipCheckbox");
  document.body.append(checkbox);

  const checkboxLabel = document.createElement("label"); // label teoriškai nereikia, čia tik dėl grožio
  checkboxLabel.setAttribute("for", "isVipCheckbox");
  checkboxLabel.textContent = "VIP";
  document.body.append(checkboxLabel);
};

export { createCheckbox };
