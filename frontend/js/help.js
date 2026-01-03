document.querySelectorAll(".faq").forEach(item => {
  item.addEventListener("click", () => {
    const ans = item.querySelector(".answer");
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});
