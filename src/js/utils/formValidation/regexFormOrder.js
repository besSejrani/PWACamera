/**
|--------------------------------------------------
| EXPLANATION :
|
| Get all the elements with the orderInput class,
| transform it into an array. The iterate elements
| must match with the input name and pattern object. 
|--------------------------------------------------
*/
const input = document.getElementsByClassName("orderInput");
const inputs = [...input];

/**
|--------------------------------------------------
| REGEX :
|
| Regex allow us to test each input accordingly to
| a specific pattern.
|
| The choosen patterns aren't ideal, feel free to
| change them if need it.
|--------------------------------------------------
*/
const patterns = {
  prénom: /^[a-zA-Z- ]{2,30}$/,
  nom: /^[a-zA-Z- ]{2,40}$/,
  adresse: /^[a-zA-Z0-9- ]{2,40}$/,
  ville: /^[a-zA-Z- ]{2,30}$/,
  codePostale: /^\d{4,6}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  téléphone: /^\d{10}$/,
  produit: /^[a-zA-Z0-9-_ ]{3,40}$/,
  informations: /^[a-zA-Z0-9!?-_\.\,\'\@\ê\é\à\è\â\:\"\ ]{0,200}$/
};

const validation = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = "yes";
  } else {
    field.className = "no";
  }
};

// Actions gets fired each time single key gets up
/**
|--------------------------------------------------
| ACTIONS :
| 
| The regex test gets fired each time a key is
| released.
|
| There's maybe a better way to handle this, test
| only when the user clicks outside of the target.
|--------------------------------------------------
*/
inputs.forEach(input => {
  input.addEventListener("keyup", event => {
    validation(event.target, patterns[event.target.attributes.name.value]);
  });
});
