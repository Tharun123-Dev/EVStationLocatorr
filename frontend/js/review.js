const API_BASE = "http://127.0.0.1:8000/api/";

// Get JWT token
function getToken() {
  return localStorage.getItem("access");
}

// Submit review
function submitReview() {

  const params = new URLSearchParams(window.location.search);
  const stationId = params.get("station");

  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  if (!rating) {
    alert("Please select a rating");
    return;
  }

  fetch(API_BASE + "reviews/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify({
      station: stationId,
      rating: rating,
      comment: comment
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error);
    } else {
      alert("✅ Review submitted successfully!");
      window.location = "stations.html";
    }
  })
  .catch(err => {
    console.error(err);
    alert("Failed to submit review");
  });
}
