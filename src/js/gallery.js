const gallery = document.querySelector(".gallery");
const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll("#thumb");

gallery.addEventListener("click", function (e) {
  if (e.target.id == "thumb") {
    mainImg.src = e.target.src;
    mainImg.classList.add("fade");

    setTimeout(function () {
      mainImg.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      if (
        thumb.classList.contains("border-4") &&
        thumb.classList.contains("border-active-color") &&
        thumb.classList.contains("shadow-inner")
      ) {
        thumb.classList.remove("border-4");
        thumb.classList.remove("border-active-color");
        thumb.classList.remove("shadow-inner");
      }
    });

    e.target.classList.add("border-4");
    e.target.classList.add("border-active-color");
    e.target.classList.add("shadow-inner");
  }
});
