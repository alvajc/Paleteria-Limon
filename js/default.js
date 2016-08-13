var map = document.getElementById('storeMap');
var storeLat = 33.9836832;
var storeLong = -118.1856951;
var storeLatLong = {lat: storeLat, lng: storeLong};
map = new google.maps.Map(map, {
center: storeLatLong,
scrollwheel: false,
zoom: 18
});
