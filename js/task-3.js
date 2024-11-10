const input = document.getElementById("name-input");

const span = document.getElementById("name-output");

const changeValue = (e) => {
  span.textContent = e.target.value;
};

input.addEventListener("input", changeValue);
