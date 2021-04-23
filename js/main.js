/** Gif hover */

$(".container",".filmePrincipal").hover(function () {
  $(".imgFrente").toggle();
  $(".imggifG").toggle();
} );

$("#logo", 'header').hover(function () {
  document.querySelector("#logo").classList.toggle("animate__heartBeat");
} );

function verFilme(){
    location.href = "https://youtu.be/rcFMPOHZrUE"
};
