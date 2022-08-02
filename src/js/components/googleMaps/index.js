import initMap from "./createMap";
import dataContact from "../../../data/carts/contactCart";
import dataAbout from "../../../data/carts/aboutCart";

/**
|--------------------------------------------------
| EXPLANATION :
|
| Load the data and pass all the values to the
| initMap(), it create the corresponding map with
| all the markers.
|
| The init() and inito() allow us to initialize the
| value and pass it to the window global object.
| 
| If more than one map, add different names at the
| html callback url where the script is invoked
|--------------------------------------------------
*/

const initContact = () => {
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
window.initContact = initContact;

const initAbout = () => {
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
};
window.initAbout = initAbout;
