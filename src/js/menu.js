// Menu file
import "../style/menu.css";
import chicken_noodle from "../images/chicken_noodle.png";
import wonton from "../images/wonton.png";
import littleVegtable from "../images/little_Vegtable.png";

export default function loadMenuPage() {
  console.log("Entered menu page.");

  const foodMenu = document.createElement("div");
  foodMenu.classList.add("food-menu");

  // Array of image sources
  const images = [
    chicken_noodle,
    wonton,
    littleVegtable,
  ]; /* Add more imports here */
  const menuTitles = [
    "Chicken Noodle Soup",
    "Delicious Pizza",
    "Tasty Salad",
    /* Add more titles */
  ];

  const backBtn = document.createElement("button");
  backBtn.classList.add("back-btn");
  backBtn.textContent = "Back btn";

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "The Meow Meow Menu";
  foodMenu.appendChild(menuTitle);

  wrapper.appendChild(foodMenu); // This will add the menu without clearing existing content
  wrapper.appendChild(backBtn);

  for (let i = 0; i < images.length; ++i) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    // Add image
    const menuImage = document.createElement("img");
    menuImage.src = images[i];
    menuImage.alt = menuTitles[i];

    // Add menu item text
    const menuText = document.createElement("p");
    menuText.textContent = menuTitles[i];

    // Append image and text to menu item
    menuItem.appendChild(menuImage);
    menuItem.appendChild(menuText);

    // Append menu item to food menu
    foodMenu.appendChild(menuItem);
  }
}
