import camera from "../data/fr/camera.js";
import objectif from "../data/fr/objectif.js";
import sdcard from "../data/fr/sdcard.js";
import trepied from "../data/fr/trepied.js";
import createCard from "./components/card";

/**
|--------------------------------------------------
| EXPLANATION:
|
| Iterate over the data and create product card
| from card().
|
| DATA :
|
| 1. camera.json
| 2. objectif.json
| 3. sdcard.json
| 4. trepied.json
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Limit the number of cameras to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

camera.slice(0, 6).map(item => {
  return createCard(
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
| Limit the number of objectifs to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

objectif.slice(0, 6).map(item => {
  return createCard(
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
| Limit the number of sdcards to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

sdcard.slice(0, 6).map(item => {
  return createCard(
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
| Limit the number of trepieds to show up on the
| main page to 6, then returns each card with 
| corresponding data
|--------------------------------------------------
*/

trepied.slice(0, 6).map(item => {
  return createCard(
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
