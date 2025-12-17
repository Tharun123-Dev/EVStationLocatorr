const API_BASE = "http://127.0.0.1:8000/api/";

function getToken() {
  return localStorage.getItem("token");
}

function logout() {
  localStorage.clear();
  window.location = "login.html";
}
