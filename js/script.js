$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	nav: true,
  	navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
  	center: true,
  	// dots: true,
  });

var dot = $('.slideWrap .owl-dot');
dot.each(function() {
	var index = $(this).index() + 1;
  if(index < 7){
  	$(this).html('0').append(index);
  }else{
     $(this).html(index);
  }
});
});