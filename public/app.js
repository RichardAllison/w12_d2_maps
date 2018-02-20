const initialize = function () {

  const mapDiv = document.querySelector('#main-map');
  const center = { lat: -50.6067956, lng: 165.968396 };
  const zoom = 13;

  const mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);
  mainMap.addMarker({ lat: -36.850109, lng: 174.767700 })

  mainMap.addClickEvent();
}

document.addEventListener('DOMContentLoaded', initialize);
