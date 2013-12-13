$(document).ready(function() {
  if(jQuery().onePageNav) {
    $('body').onePageNav({
      changeHash: false, 
      currentClass: 'active', 
      filter: 'a[href^="#"]',
      scrollOffset: 30,
      scrollSpeed: 750, 
  	  scrollThreshold: 0.5,
  	  easing: 'swing' 
    });
  }
  // document.addEventListener('touchstart', function(){
  // 	window.
  // }, false);

});

