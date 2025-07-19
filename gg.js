var btn = document.createElement("button");
btn.id = "sticky-button";
btn.innerText = "اطلب الآن";
btn.onclick = function () {
  window.location.href = "/panier"; // غيّر هذا الرابط إذا أردت
};
document.body.appendChild(btn);
