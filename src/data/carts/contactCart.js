import styles from "../../js/components/googleMaps/styleMap.json";

/**
|--------------------------------------------------
| STYLING MAP:
|
| https://mapstyle.withgoogle.com
| https://snazzymaps.com
|
| Pass to our data the style so it can apply to
| the initMap() the corresponding values.
|--------------------------------------------------
*/

const cart = [
  {
    cart: {
      entryPoint: "map",
      zoom: 15.5,
      mapCoords: {
        lat: 46.442344,
        lng: 6.895436
      },
      mapType: "terrain",
      draggable: false,
      styles,
      markers: [
        {
          coords: {
            lat: 46.445192,
            lng: 6.898999
          },
          content: "bla",
          icon: require("../../images/logo.svg")
        },
        {
          coords: {
            lat: 46.442529,
            lng: 6.889117
          },
          content: "here",
          icon: require("../../images/logo.svg")
        },
        {
          coords: {
            lat: 46.442861,
            lng: 6.898376
          },
          content: "yessssss",
          icon: require("../../images/logo.svg")
        }
      ]
    }
  }
];

export default cart;
