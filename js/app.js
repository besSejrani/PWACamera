if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("Service worker installed"))
      .catch(() => console.log("Service worker couldn't be installed"));
  });
}

const button = document.getElementById("fab");
let defferedPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  defferedPrompt = event;
  return false;
});

button.addEventListener("click", () => {
  if (defferedPrompt) {
    defferedPrompt.prompt();

    defferedPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === "dismissed") {
        console.log("user cancelled installation");
      } else {
        console.log("user added to homescreen");
        button.style.display = "none";
      }
    });
    defferedPrompt = null;
  }
});
