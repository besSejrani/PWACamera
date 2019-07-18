if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("Service worker installed"))
      .catch(() => console.log("Service worker couldn't be installed"));
  });
}

const button = document.getElementById("fab");
/**
|--------------------------------------------------
| Added class hide to the button, instead of using display:'none',
| we used position:'absolute' with some outside values, for SEO reasons
|--------------------------------------------------
*/
let defferedPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  defferedPrompt = event;
  button.classList.remove("hide");
  return false;
});

button.addEventListener("click", () => {
  button.classList.add("hide");
  if (defferedPrompt) {
    defferedPrompt.prompt();

    defferedPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === "dismissed") {
        console.log("user cancelled installation");
      } else {
        console.log("user added to homescreen");
      }
      deferredPrompt = null;
    });
  }
});
