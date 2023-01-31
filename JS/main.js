let buttonTop = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }