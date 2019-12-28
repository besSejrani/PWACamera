/**
|--------------------------------------------------
| EXPLANATION :
|
| Create a marker with custom icon by passing the
| coordinates, the specific map, the image and the
| content that's gonna by used
|
| DATA :
| 
| The data is comming from a json or js file
|--------------------------------------------------
*/
const createMarker = (coords, mapCart, image, content) => {
  const marker = new google.maps.Marker({
    position: coords,
    map: mapCart,
    icon: image
  });

  if (content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });

    marker.addListener("click", () => {
      infoWindow.open(mapCart, marker);
    });
  }
};
export default createMarker;
