function toggleSwitch() {

  const login = document.getElementById("login");
  const register = document.getElementById("register");
  const container = document.getElementById("container");


  if (register.style.display === "flex") {
    register.style.display = "none";
    login.style.display = "flex";
    container.style.animationName="transition1"
  } else {
    login.style.display = "none";
    register.style.display = "flex";
    container.style.animationName="transition2"
  }
}
