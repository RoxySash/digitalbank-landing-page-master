const mobileMenu = document.getElementById("mobileMenu");
const hamburgerBtn = document.getElementById("openBtn");

hamburgerBtn.addEventListener("click", () => {
  if(mobileMenu.style.display === "none") {
     mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
 
})



