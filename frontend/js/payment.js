const API_BASE = "http://127.0.0.1:8000/api/payment/";

// Get JWT token
function getToken() {
  return localStorage.getItem("access");
}

// Make payment
function makePayment() {

  const params = new URLSearchParams(window.location.search);
  const bookingId = params.get("booking");

  const method = document.getElementById("method").value;

  if (!method) {
    alert("Please select a payment method");
    return;
  }

  fetch(API_BASE + "payments/pay/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify({
      booking: bookingId,
      method: method
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error);
    } else {
      alert("✅ Payment Successful!");
      // Redirect to review page
      window.location = "review.html?station=" + data.booking;
    }
  })
  .catch(err => {
    console.error(err);
    alert("Payment failed");
  });
}
