import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/sass/materialize.scss";
import "../../sass/app/_materialize-icons.scss";

import "../../sass/main.scss";
/**
|--------------------------------------------------
| EXPLANATION :
| 
| Loading materialize-css  javascript library
| Initializing materialize javascript components
|
| Loading materialize-css sass library
| Loading materialize-icons
|
| Loading custom scss
|--------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
});
