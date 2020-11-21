import camera from "../../../data/en/camera";
import objectif from "../../../data/en/objectif";
import sdcard from "../../../data/en/sdcard";
import trepied from "../../../data/en/trepied";
import createCard from "./card";

/**
|--------------------------------------------------
| EXPLANATION:
|
| Iterate over the data and create product card
| from card().
|
| DATA :
|
| 1. camera.js
| 2. objectif.js
| 3. sdcard.js
| 4. trepied.js
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Limit the number of cameras to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

camera.slice(0, 6).map((item) => {
  return createCard(item.title, item.description, item.image, item.lazyImage, item.fallbackImage, item.price, item.buyIcon, item.section);
});

/**
|--------------------------------------------------
| Limit the number of objectifs to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

objectif.slice(0, 6).map((item) => {
  return createCard(item.title, item.description, item.image, item.lazyImage, item.fallbackImage, item.price, item.buyIcon, item.section);
});

/**
|--------------------------------------------------
| Limit the number of sdcards to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

sdcard.slice(0, 6).map((item) => {
  return createCard(item.title, item.description, item.image, item.lazyImage, item.fallbackImage, item.price, item.buyIcon, item.section);
});

/**
|--------------------------------------------------
| Limit the number of trepieds to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

trepied.slice(0, 6).map((item) => {
  return createCard(item.title, item.description, item.image, item.lazyImage, item.fallbackImage, item.price, item.buyIcon, item.section);
});
