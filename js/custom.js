// JavaScript Document
$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".menu").slideToggle()
    })
     $(".btn-sub1").click(function(){
        $(".mega-menu").slideToggle()
    })
     $(".btn-sub2").click(function(){
        $(".sub-menu2").slideToggle()
    })
})
$('#banner').owlCarousel({
    loop:true,
    items:1,
    margin:30,
    nav:true,
    dots:false,
   /* autoplay:true,
    smartSpeed:1000,
   autoplayTimeout:5000,*/
  
})

$('#testimonial').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
          },
        1000:{
            items:2
        },
		1200:{
            items:3
        }
    }
})
$('#bestSell').owlCarousel({
    loop:true,
    items:1,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
   autoplayTimeout:5000,
  
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


/*------------Khu vuc show anh sp detail-------------*/
function showImg(stt)
{
var anh=document.getElementById("anhto")
anh.src="images/shop/shop-cones ("+ stt +").jpg";
	
	
}
/*--------------------Back to top--------------------*/
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
