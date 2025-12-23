fetch(API_BASE + "stations/")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(s => {
      html += `
        <div class="card p-2 mb-2">
          <h5>${s.name}</h5>
          <p>${s.city}</p>
          <a href="chargers.html?station=${s.id}" class="btn btn-primary">
            View Chargers
          </a>
        </div>`;
    });
    document.getElementById("list").innerHTML = html;
  });
