/**
|--------------------------------------------------
| EXPLANATION:
|
| Add script tag with the API KEY, don't forget to
| validate it only for your domain (GCP console).
|
| Find id map, add lng and lat, finaly generate
| map.
|--------------------------------------------------
*/
import createMarker from "./createMarker";

const initMap = (
  entryPoint,
  coords,
  zoom,
  mapTypeId,
  draggable,
  styles,
  marker
) => {
  /**
  |-----------------------------------------------------
  | EXPLANATION :
  |
  | Define a map, by passing the corresponding parameters 
  |------------------------------------------------------
  */
  const map = new google.maps.Map(document.getElementById(entryPoint), {
    center: {
      lat: coords.lat,
      lng: coords.lng
    },
    zoom,
    mapTypeId,
    streetViewControl: false,
    disableDefaultUI: true,
    styles
  });

  /**
  |--------------------------------------------------
  | EXPLANATION :
  |
  | Pass to the createMarker() all the data for
  | creating the markers, specially the map parameter
  | for the specifc map
  |--------------------------------------------------
  */
  marker.map(item => {
    return createMarker(item.coords, map, item.icon, item.content);
  });

  /**
  |--------------------------------------------------
  | Pass addition options to the map
  |--------------------------------------------------
  */
  map.setOptions({ draggable, zoomControl: true });
};

export default initMap;
