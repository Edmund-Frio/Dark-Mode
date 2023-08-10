let backgroundColor = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");
let githubLink = document.querySelector(".link");

function toggleDarkMode() {
  backgroundColor.classList.toggle("dark-mode");
  let currentBtn = toggleBtn.classList.toggle("dark-mode");

  if (currentBtn === true) {
    toggleBtn.innerHTML = "Dark Mode";
    githubLink.style.color = "#d4cec4";
  } else {
    toggleBtn.innerHTML = "Light Mode";
    githubLink.style.color = "#090614";
  }

  toggleBtn.addEventListener("click", () => {
    let randY = Math.floor((Math.random() * 400));
    let randX = Math.floor((Math.random() * 400));
    backgroundColor.style.transform = `translate(${randX}px, ${randY}px)`;
  
    backgroundColor.appendChild(cloneDark);
  })
  

}
