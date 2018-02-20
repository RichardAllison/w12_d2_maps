const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  const infowindow = new google.maps.InfoWindow({
    content: 'content'
  });
  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });
};


MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() })
  }.bind(this));
};
