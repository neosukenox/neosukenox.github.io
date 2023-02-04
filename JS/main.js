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
/*
var ele = document.getElementsByClassName('show_hide');
for (var i = 0; i < ele.length; i++){
  ele[i].addEventListener('click',() => hideCategory(ele[i]));  
}
*/


function hideCategory2(a,b){
  i = document.getElementById(a);
  j= document.getElementById(b);
  if(i.style.display == "none"){
      i.style.display= "block"
      j.value = "-";
  }
  else
  {
    i.style.display= "none"
    j.value = "+";
  }
}