$(document).ready(function() {
	// var scroller = new FTScroller(document.getElementById('main-content'), {
	// 	scrollingX: false
	// });
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
  // window.addEventListener('touchstart', function(){
  // 	alert('1');
  // }, false);


});

