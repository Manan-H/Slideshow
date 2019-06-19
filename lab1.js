
var index = 1;
showSlide(index);


function changeSlide(n){
	showSlide(index += n);
};

function currentSlide(n){
	showSlide(index = n);
};

function showSlide(n){
	var images = document.querySelectorAll('.slideshow-photos img');
	var dots = document.querySelectorAll('.slideshow-dots-item');

	if (n > images.length) {index = 1} 
	if (n < 1) {index = images.length}

	for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  	}

  	for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}

  	images[index-1].style.display = "block"; 
  	dots[index-1].className += " active";
};

setInterval(changeSlide, 4000, 1);