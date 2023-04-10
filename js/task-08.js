const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onUserFormSubmit);

function onUserFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value.trim();
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
