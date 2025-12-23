const API_BASE = "http://127.0.0.1:8000/api/";

// Get JWT token
function getToken() {
  return localStorage.getItem("access");
}

// Confirm booking function
function confirmBooking() {

  const params = new URLSearchParams(window.location.search);
  const stationId = params.get("station");
  const chargerId = params.get("charger");

  const date = document.getElementById("date").value;
  const startTime = document.getElementById("start_time").value;
  const endTime = document.getElementById("end_time").value;

  if (!date || !startTime || !endTime) {
    alert("Please fill all fields");
    return;
  }

  fetch(API_BASE + "bookings/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify({
      station: stationId,
      charger: chargerId,
      date: date,
      start_time: startTime,
      end_time: endTime
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error);
    } else {
      alert("✅ Booking Successful!");
      // redirect to payment page
      window.location = "payment.html?booking=" + data.id;
    }
  })
  .catch(err => {
    console.error(err);
    alert("Server error");
  });
}
