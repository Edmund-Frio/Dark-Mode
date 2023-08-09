let backgroundColor = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");

function toggleDarkMode() {
  backgroundColor.classList.toggle("dark-mode");
  let currentBtn = toggleBtn.classList.toggle("dark-mode");

  if (currentBtn !== true) {
    toggleBtn.innerHTML = "Dark Mode";
  } else {
    toggleBtn.innerHTML = "Light Mode";
  }
}

toggleBtn.addEventListener("click", () => {
  let nextProject = document.getElementById("next-project");
  let clicks = 0;
  let a = document.createElement("a");

  clicks++;

  console.log(clicks);
});
