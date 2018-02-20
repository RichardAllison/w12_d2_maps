const handleButtonClick = function () {
  const center = {lat:41.88603285104684, lng:-87.62118101119995}
  this.googleMap.setCenter(center);
  const ChicagoInfo = "<b>Chicago</b><br>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works."
  this.addMarker(center, ChicagoInfo);
}

const initialize = function () {
  const mapDiv = document.querySelector('#main-map');
  const center = { lat: 55.953056, lng: -3.188889 };
  const zoom = 13;

  const mainMap = new MapWrapper(mapDiv, center, zoom);

  const EdinburghInfo = "<b>Edinburgh</b><br>Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials."
  const GlasgowInfo = "<b>Glasgow</b><br>Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene."
  mainMap.addMarker(center, EdinburghInfo);
  mainMap.addMarker({ lat: 55.858, lng: -4.259 }, GlasgowInfo)
  mainMap.addClickEvent();

  const button = document.querySelector('#Chicago-button');
  button.addEventListener('click', handleButtonClick.bind(mainMap));

  const bounceButton = document.querySelector('#button-bounce-markers')
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))
}



document.addEventListener('DOMContentLoaded', initialize);
