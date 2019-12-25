import camera from "../data/camera.js";
import objectif from "../data/objectif.js";
import sdcard from "../data/sdcard.js";
import trepied from "../data/trepied.js";

/**
 |--------------------------------------------------
 | EXPLANATION:
 |
 | Iterate over the data and create product card
 | from product().
 |
 | DATA :
 |
 | 1. camera.json
 | 2. objectif.json
 | 3. trepied.json
 |--------------------------------------------------
 */

console.log(camera);

const product = (
  titleProduct,
  descriptionProduct,
  image,
  lazyImage,
  fallbackImage,
  priceProduct,
  buyIcon,
  entryPoint
) => {
  /**
   |--------------------------------------------------
   | COLLAPSIBLE
   |--------------------------------------------------
   */

  // collapsible-body

  const collapsibleBodyText1 = document.createElement("h6");
  collapsibleBodyText1.textContent = "Wifi";

  const collapsibleBodyIcon1 = document.createElement("i");
  collapsibleBodyIcon1.classList.add("material-icons");
  collapsibleBodyIcon1.textContent = "wifi";

  const collapsibleBodyIcon1Div = document.createElement("div");
  collapsibleBodyIcon1Div.classList.add("collapsible-content");
  collapsibleBodyIcon1Div.appendChild(collapsibleBodyIcon1);
  collapsibleBodyIcon1Div.appendChild(collapsibleBodyText1);

  // ----------------------------------------------------------------

  const collapsibleBodyText2 = document.createElement("h6");
  collapsibleBodyText2.textContent = "Bluetooth";

  const collapsibleBodyIcon2 = document.createElement("i");
  collapsibleBodyIcon2.classList.add("material-icons");
  collapsibleBodyIcon2.textContent = "bluetooth";

  const collapsibleBodyIcon2Div = document.createElement("div");
  collapsibleBodyIcon2Div.classList.add("collapsible-content");
  collapsibleBodyIcon2Div.appendChild(collapsibleBodyIcon2);
  collapsibleBodyIcon2Div.appendChild(collapsibleBodyText2);

  // ----------------------------------------------------------------

  const collapsibleBodyText3 = document.createElement("h6");
  collapsibleBodyText3.textContent = "Airplay";

  const collapsibleBodyIcon3 = document.createElement("i");
  collapsibleBodyIcon3.classList.add("material-icons");
  collapsibleBodyIcon3.textContent = "airplay";

  const collapsibleBodyIcon3Div = document.createElement("div");
  collapsibleBodyIcon3Div.classList.add("collapsible-content");
  collapsibleBodyIcon3Div.appendChild(collapsibleBodyIcon3);
  collapsibleBodyIcon3Div.appendChild(collapsibleBodyText3);

  // ----------------------------------------------------------------

  const collapsibleBody = document.createElement("div");
  collapsibleBody.classList.add("collapsible-body");
  collapsibleBody.appendChild(collapsibleBodyIcon1Div);
  collapsibleBody.appendChild(collapsibleBodyIcon2Div);
  collapsibleBody.appendChild(collapsibleBodyIcon3Div);

  // collapsible-header

  const textInfos = document.createElement("h6");
  textInfos.textContent = "More Infos";

  const iconInfos = document.createElement("i");
  iconInfos.classList.add("material-icons");
  iconInfos.textContent = "keyboard_arrow_down";

  const collapsibleHeader = document.createElement("div");
  collapsibleHeader.classList.add("collapsible-header");
  collapsibleHeader.appendChild(iconInfos);
  collapsibleHeader.appendChild(textInfos);

  // ul & li

  const collapsibleLi = document.createElement("li");
  collapsibleLi.appendChild(collapsibleHeader);
  collapsibleLi.appendChild(collapsibleBody);

  const collapsible = document.createElement("ul");
  collapsible.classList.add("collapsible");
  collapsible.appendChild(collapsibleLi);
  /**
 |--------------------------------------------------
 | CARD-ACTIONS
 |--------------------------------------------------
 */

  const price = document.createElement("h6");
  price.classList.add("blue-text", "price");
  price.textContent = priceProduct;

  const icon = document.createElement("i");
  icon.classList.add("material-icons");
  icon.textContent = buyIcon;

  const button = document.createElement("button");
  button.classList.add("btn", "waves-effect", "waves-light", "blue");
  button.appendChild(icon);

  const cardActions = document.createElement("div");
  cardActions.classList.add("cardActions");
  cardActions.appendChild(button);
  cardActions.appendChild(price);

  const cardAction = document.createElement("div");
  cardAction.classList.add("card-action", "grey", "lighten-4");
  cardAction.appendChild(cardActions);

  /**
 |--------------------------------------------------
 | CARD-CONTENT
 |--------------------------------------------------
 */

  const description = document.createElement("p");
  description.textContent = descriptionProduct;

  const title = document.createElement("h5");
  title.classList.add("blue-text");
  title.textContent = titleProduct;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardContent.appendChild(title);
  cardContent.appendChild(description);

  /**
 |--------------------------------------------------
 | CARD-IMAGE
 |
 | IMPORTANT INFORMATION:
 |
 | html-webpack-plugin parses the src attributes
 | and replaces it with the "require" statement.
 |
 | When using javascript for accessing the DOM
 | and manipulating it, specify the "require"
 | before ressources.
 |--------------------------------------------------
 */

  const cardPictureImage = document.createElement("img");
  cardPictureImage.setAttribute("src", fallbackImage);

  const cardSource = document.createElement("source");
  cardSource.setAttribute("srcset", lazyImage);
  cardSource.setAttribute("data-lazy", image);
  cardSource.setAttribute("type", "image/webp");

  const cardPicture = document.createElement("picture");
  cardPicture.appendChild(cardSource);
  cardPicture.appendChild(cardPictureImage);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  cardImage.appendChild(cardPicture);

  /**
  |--------------------------------------------------
  | CARD
  |--------------------------------------------------
  */

  const cardCamera = document.createElement("div");
  cardCamera.classList.add("card");
  cardCamera.appendChild(cardImage);
  cardCamera.appendChild(cardContent);
  cardCamera.appendChild(collapsible);
  cardCamera.appendChild(cardAction);

  const productCamera = document.createElement("div");
  productCamera.classList.add("col", "s12", "m6", "l4");
  productCamera.appendChild(cardCamera);

  /**
  |--------------------------------------------------
  | ENTRYPOINT
  |--------------------------------------------------
   */
  const rowCamera = document.getElementById(entryPoint);
  rowCamera.appendChild(productCamera);
};

/**
|--------------------------------------------------
| Limit the number of camera to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

camera.slice(0, 6).map(item => {
  return product(
    item.title,
    item.description,
    item.image,
    item.lazyImage,
    item.fallbackImage,
    item.price,
    item.buyIcon,
    item.section
  );
});

/**
|--------------------------------------------------
| Limit the number of camera to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

objectif.slice(0, 6).map(item => {
  return product(
    item.title,
    item.description,
    item.image,
    item.lazyImage,
    item.fallbackImage,
    item.price,
    item.buyIcon,
    item.section
  );
});

/**
|--------------------------------------------------
| Limit the number of camera to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

sdcard.slice(0, 6).map(item => {
  return product(
    item.title,
    item.description,
    item.image,
    item.lazyImage,
    item.fallbackImage,
    item.price,
    item.buyIcon,
    item.section
  );
});

/**
|--------------------------------------------------
| Limit the number of camera to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

trepied.slice(0, 6).map(item => {
  return product(
    item.title,
    item.description,
    item.image,
    item.lazyImage,
    item.fallbackImage,
    item.price,
    item.buyIcon,
    item.section
  );
});
