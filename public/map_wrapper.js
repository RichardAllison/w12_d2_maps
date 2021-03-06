const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = []
};

MapWrapper.prototype.addMarker = function (coords, content) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });

  if (!content) content = `Latitude:  ${coords.lat} <br>Longitude: ${coords.lng}`;
  const infowindow = new google.maps.InfoWindow({
    content: content
  });
  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });
  this.markers.push(marker)
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function (event) {
    this.addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() })
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
}
