import "../style/order.css";

export default function loadOrderPage() {
  console.log("Inside order page");

  const wrapper = document.getElementById("wrapper");

  const orderContainer = document.createElement("div");
  orderContainer.classList.add("order-container");

  const orderInfo = document.createElement("p");
  orderInfo.classList.add("order-info");
  orderInfo.textContent =
    "Use the Google form to submit your order. I will email you with further updates about your order. The form may need some time to load.";
  orderContainer.appendChild(orderInfo);

  const orderFormContainer = document.createElement("div");
  orderFormContainer.innerHTML = `
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScmh5HeBPX_jmkgrOzqimNMWv9spNBOnTcoN9KI3YqnrPgTlw/viewform?embedded=true"
      width="640"
      height="1686"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>`;
  orderFormContainer.classList.add("order-form-container");

  orderContainer.appendChild(orderFormContainer);

  wrapper.appendChild(orderContainer);
}
