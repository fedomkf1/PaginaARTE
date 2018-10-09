var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

function ScrollThing(id){
	switch(id){
		case 0: 
		$('html, body').animate({
    scrollTop: $("div.A").offset().top
  }, 500)
		break;

		case 1: 
		$('html, body').animate({
    scrollTop: $("div.B").offset().top
  }, 500)
		break;
		
		case 2: 
		$('html, body').animate({
    scrollTop: $("div.C").offset().top
  }, 500)
		break;
		
		case 3: 
		$('html, body').animate({
    scrollTop: $("div.D").offset().top
  }, 500)
		break;
			
	}
}