var button = document.querySelector(".page-number-2");
var firstpage = document.querySelector(".list-of-goods");
var secondpage = document.querySelector(".list-of-goods-2");

button.addEventListener("click", function(event) {
      event.preventDefault();
firstpage.classList.remove("list-of-goods-1");
});
