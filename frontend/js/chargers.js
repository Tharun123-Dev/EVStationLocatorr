const stationId = new URLSearchParams(location.search).get("station");

fetch(API_BASE + "stations/" + stationId + "/chargers/")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(c => {
      html += `
        <div class="card p-2 mb-2">
          <h6>${c.charger_type} (${c.power})</h6>
          <p>₹${c.price_per_hour}/hour</p>
          <a href="booking.html?charger=${c.id}&station=${stationId}"
             class="btn btn-success">
            Book
          </a>
        </div>`;
    });
    document.getElementById("chargers").innerHTML = html;
  });
