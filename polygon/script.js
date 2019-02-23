var map;

function createMap () {
  var a = 43.642,
      b = -79.389,
      diff = 0.0033;

  var options = {
    center: { lat: a, lng: b },
    mapTypeId: 'satellite',
    zoom: 16
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  var polygonCoordinates = [
    { lat: a - diff, lng: b - diff },
    { lat: a + diff, lng: b - diff },
    { lat: a + diff, lng: b + diff },
    { lat: a - diff, lng: b + diff },
  ];

  var polygon = new google.maps.Polygon({
    map: map,
    paths: polygonCoordinates,
    strokeColor: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.4,
    draggable: true,
    editable: true
  });

  google.maps.event.addListener(polygon.getPath(), 'set_at', function() {
    logArray(polygon.getPath());
  });
  google.maps.event.addListener(polygon.getPath(), 'insert_at', function() {
    logArray(polygon.getPath());
  });
}  

function logArray (array) {
  var vertices = [];

  for (var i = 0; i < array.getLength(); i++) {
    vertices.push({
      lat: array.getAt(i).lat(),
      lng: array.getAt(i).lng()
    });
  }

  console.log(vertices);
}
