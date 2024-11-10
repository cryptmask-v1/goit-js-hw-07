const form = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
  e.preventDefault();
  const mailValue = e.target.elements.email.value;
  const passValue = e.target.elements.password.value;

  if ((mailValue && passValue) === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({
      email: mailValue,
      password: passValue,
    });
    form.reset();
  }
};

form.addEventListener("submit", handleFormSubmit);
