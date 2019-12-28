import initMap from "./createMap";
import dataContact from "../../../data/carts/contactCart";
import dataAbout from "../../../data/carts/aboutCart";

/**
|--------------------------------------------------
| Explanation :
|
| Load the data and pass all the values to the
| initMap(), it create the corresponding map with
| all the markers.
|
| The init() allow us to initialize the value and
| pass it to the window global object.
|--------------------------------------------------
*/

const init = () => {
  dataAbout.map(item => {
    return initMap(
      item.cart.entryPoint,
      item.cart.mapCoords,
      item.cart.zoom,
      item.cart.mapType,
      item.cart.draggable,
      item.cart.styles,
      item.cart.markers
    );
  });

  dataContact.map(item => {
    return initMap(
      item.cart.entryPoint,
      item.cart.mapCoords,
      item.cart.zoom,
      item.cart.mapType,
      item.cart.draggable,
      item.cart.styles,
      item.cart.markers
    );
  });
};
window.init = init;
