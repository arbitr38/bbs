var overlay = document.querySelector(".modal-overlay");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-map .modal-content-close");

mapOpen.addEventListener("click", function(event) {
          event.preventDefault();
    overlay.classList.add("modal-overlay-show");
    mapPopup.classList.add("modal-content-map-show");
});

mapClose.addEventListener("click", function(event) {
      event.preventDefault();
overlay.classList.remove("modal-overlay-show");
mapPopup.classList.remove("modal-content-map-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (mapPopup.classList.contains("modal-content-map-show")) {
mapPopup.classList.remove("modal-content-map-show");
overlay.classList.remove("modal-overlay-show");
}
}
});

overlay.addEventListener("click", function(event) {
if (mapPopup.classList.contains("modal-content-map-show")) {
mapPopup.classList.remove("modal-content-map-show");
overlay.classList.remove("modal-overlay-show");
}
});
