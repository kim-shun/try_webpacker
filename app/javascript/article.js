$(function () {
  $(document).on("mouseover", "h1", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "h1", function () {
    $(this).css({ "color": ""});
  })
})

// 通常のJavaScriptだけで記入した場合
// window.onload = function () {
//   document.querySelector("h1").addEventListener("mouseover", function (event) {
//     this.style.color = "blue"
//   }, false);
//   document.querySelector("h1").addEventListener("mouseout", function (event) {
//     this.style.color = ""
//   }, false);
// };