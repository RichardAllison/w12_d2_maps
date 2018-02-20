const initialize = function () {

  const mapDiv = document.querySelector('#main-map');
  const center = { lat: 55.953056, lng: -3.188889 };
  const zoom = 13;

  const mainMap = new MapWrapper(mapDiv, center, zoom);

  const Edinburgh = mainMap.addMarker(center);
  const Glasgow = mainMap.addMarker({ lat: 55.858, lng: -4.259 })
  const EdinburghInfo = "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials."
  mainMap.addClickEvent();

}

document.addEventListener('DOMContentLoaded', initialize);
