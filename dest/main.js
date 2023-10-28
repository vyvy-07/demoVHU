function openModal() {
  const btnLogin = document.querySelector(".sign__buttons .login");
  const btnRegisger = document.querySelector(".sign__buttons .register");
  const modalLogin = document.querySelector(".modalLogin");
  const modalRegister = document.querySelector(".modalRegister");
  const btnCloseR = document.querySelector(".modalRegister .btn-close");
  const btnCloseL = document.querySelector(".modalLogin .btn-close");
  if (document.contains(btnLogin)) {
    btnLogin.addEventListener("click", () => {
      modalLogin.classList.toggle("active");
    });

    btnCloseL.addEventListener("click", () => {
      modalLogin.classList.toggle("active");
    });
  }
  if (document.contains(modalRegister)) {
    btnRegisger.addEventListener("click", () => {
      modalRegister.classList.toggle("active");
    });
    btnCloseR.addEventListener("click", () => {
      modalRegister.classList.remove("active");
    });
  }
}
openModal();
