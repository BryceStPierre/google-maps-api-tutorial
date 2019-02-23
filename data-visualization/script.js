var map;

function createMap () {
  var options = {
    center: { lat: 0, lng: 130 },
    mapTypeId: 'terrain',
    zoom: 2
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  var script = document.createElement('script');
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('mag');
    return {
      icon: getEarthquakeCircle(magnitude)
    };
  });
}  

function getEarthquakeCircle (value) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'purple',
    fillOpacity: .2,
    scale: Math.pow(2, value) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function eqfeed_callback (geojson) {
  map.data.addGeoJson(geojson);
}