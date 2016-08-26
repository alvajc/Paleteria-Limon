function initMap() {
  var myLatLng = {lat: 33.983181, lng: -118.185696};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Paleteria Limon'
  });
};













