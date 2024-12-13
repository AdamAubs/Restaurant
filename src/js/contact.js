import "../style/contact.css";
export default function loadContactPage() {
  console.log("Enter the contact page.");

  // Main container for the contact page
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  // Title element
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";
  contactPage.appendChild(contactTitle);

  // Contact info element
  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Feel free to reach out to us at: ";
  contactPage.appendChild(contactInfo);

  // Email element
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("contact-container");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.classList.add("contact-label");

  const email = document.createElement("p");
  email.textContent = "info@YOUREMAILGOESHERE.gmail.com";
  email.classList.add("contact-detail");

  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(email);

  contactPage.appendChild(emailContainer);

  // Phone element
  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("contact-container");
  // Add the label
  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone Number:";
  phoneLabel.classList.add("contact-label");
  // Add where to put phone number
  const phone = document.createElement("p");
  phone.textContent = "PHONE NUMBER GOES HERE";
  phone.classList.add("contact-detail");
  // Append to phoneContainer than contactPage
  phoneContainer.appendChild(phoneLabel);
  phoneContainer.appendChild(phone);
  contactPage.appendChild(phoneContainer);

  // Address element
  const addressContainer = document.createElement("div");
  addressContainer.classList.add("contact-container");
  // Add the label
  const addressLabel = document.createElement("Label");
  addressLabel.textContent = "Address:";
  addressLabel.classList.add("contact-label");
  // Add where to put address 
  const address = document.createElement("p");
  address.textContent = "ADDRESS GOES HERE";
  address.classList.add("contact-detail");

  addressContainer.appendChild(addressLabel);
  addressContainer.appendChild(address);
  contactPage.appendChild(addressContainer);

  // Google maps embed link to location
  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d47530.96719762204!2d-87.6297982!3d41.8781136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!3m2!1d41.8781136!2d-87.6297982!5e0!3m2!1sen!2sus!4v1734065334366!5m2!1sen!2sus";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  // append iframe (Embed google maps link) to map container
  mapContainer.appendChild(iframe);
  // Append map container contact pages
  contactPage.appendChild(mapContainer);

  // Append contact page to the wrapper
  const wrapper = document.getElementById("wrapper");
  wrapper.appendChild(contactPage);
}
