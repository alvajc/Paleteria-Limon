// Google map function

function initMap() {
  var myLatLng = {lat: 33.983181, lng: -118.185696};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Paleteria Limon'
  });
   map.addListener('center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 8000);
  });
};

// jQuery for smooth scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


// jQuery for div show on scroll

if ($(window).width() > 991) {
  $(document).ready(function() {
  
  /* Hide all elements outside the visible window */
  $('body *').each( function(){
     
    var top_of_object = $(this).position().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
     
    if( bottom_of_window < top_of_object  ){
    
      $(this).addClass('hideme').css({'opacity':'0'});
      
    }
    
  });
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    
    /* Check the location of the desired elements */
    $('.hideme').each( function(i){
      
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      
        if( bottom_of_window > ( bottom_of_object + 20 )  ){
        
          $(this).removeClass('hideme').animate({'opacity':'1'},500);
          
        }
      
    }); 
  
  });
  
 });
}

