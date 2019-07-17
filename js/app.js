if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("Service worker installed"))
      .catch(() => console.log("Service worker couldn't be installed"));
  });
}

const button = document.getElementById("fab");
button.classList.add("hide");
let defferedPrompt;

window.addEventListener("load", () => {
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

  window.onappinstalled = (event) => {
    console.log("app uninstalled");
    button.classList.add("hide");
  };
});
