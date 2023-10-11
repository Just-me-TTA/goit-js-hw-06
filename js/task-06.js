 const validationInput = document.getElementById("validation-input");
  const validClass = "valid";
  const invalidClass = "invalid";

  validationInput.addEventListener("blur", () => {
    const enteredLength = validationInput.value.length;
    const expectedLength = Number(validationInput.getAttribute("data-length"));

    if (enteredLength === expectedLength) {
      validationInput.classList.remove(invalidClass);
      validationInput.classList.add(validClass);
    } else {
      validationInput.classList.remove(validClass);
      validationInput.classList.add(invalidClass);
    }
  });