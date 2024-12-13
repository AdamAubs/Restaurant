// Import your JavaScript file
import loadInitialPage from "./js/app";
import loadMenuPage from "./js/menu";
import loadContactPage from "./js/contact";
import loadOrderPage from "./js/order";

//---------
// Nav bar
//---------
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Function to open the hamburger menu
hamburger.addEventListener("click", () => {
  console.log("hamburger menu pressed");
  navMenu.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  console.log("would you look at that! The hamburger menu is open");
});

// Function to close the hamburger menu
function closeHamburgerMenu() {
  console.log("The hamburger menu has closed");
  navMenu.classList.remove("active");
}

// Menu button
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  // check the location of the current page being visited
  const page = location.hash.substring(1);

  if (page === "menu") {
    console.log("Loading Menu"); // Already on Menu Page
    loadMenuPage();
  } else {
    console.log("Loading Home");
    loadInitialPage();
  }

  // Tab switching logic
  const homeBtn = document.querySelector(".homeBtn");
  const contactBtn = document.querySelector(".contactBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const orderBtn = document.querySelector(".orderBtn");
  const wrapper = document.getElementById("wrapper");

  if (homeBtn && menuBtn && contactBtn && orderBtn) {
    homeBtn.addEventListener("click", () => {
      console.log("homeBtn pressed");
      wrapper.innerHTML = ""; // Clear existing content
      loadInitialPage();
      // Push the page onto the history stack
      history.pushState({ page: "home" }, "Home", "#home"); // Add "home" to the history
      closeHamburgerMenu(); // close menu on navigation
    });

    menuBtn.addEventListener("click", () => {
      console.log("menuBtn pressed");
      wrapper.innerHTML = "";
      loadMenuPage();
      // Push the page onto the history stack
      history.pushState({ page: "menu" }, "Menu", "#menu"); // Add "menu" to the history
      closeHamburgerMenu(); // close menu on navigation
    });

    contactBtn.addEventListener("click", () => {
      console.log("contactBtn pressed");
      wrapper.innerHTML = "";
      loadContactPage();
      // Push the page onto the history stack
      history.pushState({ page: "contact" }, "Contact", "#contact");
      closeHamburgerMenu();
    });

    orderBtn.addEventListener("click", () => {
      console.log("orderBtn pressed");
      wrapper.innerHTML = "";
      loadOrderPage();
      // Push the page onto the history stack
      history.pushState({ page: "order" }, "Order", "#order");
      closeHamburgerMenu();
    });
  } else {
    console.error("Buttons not found in the DOM!");
  }
});

// Handling popstate event for history navigation
window.addEventListener("popstate", (event) => {
  wrapper.innerHTML = ""; // Clear existing content
  const page = event.state ? event.state.page : location.hash.substring(1);

  if (page === "menu") {
    console.log("Navigated back to Menu");
    loadMenuPage();
  } else if (page === "contact" || page === "") {
    console.log("Navigated back to Contact");
    loadContactPage();
  } else if (page === "order" || page === "") {
    console.log("Navigated back to Order");
    loadOrderPage();
  } else {
    console.log("Unknown page:", page);
    loadInitialPage();
  }

  closeHamburgerMenu(); // Close menu when navigating with back/forward buttons
});
// Call the function to load the Menu page content

console.log("testing...");
