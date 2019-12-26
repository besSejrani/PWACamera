/**
|--------------------------------------------------
| Index.js
|
| Entrypoint for webpack, takes in consideration
| all the files listed
|--------------------------------------------------
*/

// JS files
import "../products";
import "../utils/intserectingObserver";
import "../utils/lazyImages";

// Materialize
import "materialize-css/dist/js/materialize.min.js";
import "../utils/materialize";

// PWA
import "../pwa/app";

// CSS
import "materialize-css/sass/materialize.scss";
import "../../sass/app/_materialize-icons.scss";
import "../../sass/main.scss";
