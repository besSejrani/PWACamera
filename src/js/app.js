if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    await navigator.serviceWorker
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

/**
 |--------------------------------------------------
 | If app already installed
 |--------------------------------------------------
 */
window.addEventListener("appinstalled", () => {
  button.classList.add("hide");
});

/**
 |--------------------------------------------------
 | Push notification
 | Request permission
 | Action click
 |--------------------------------------------------
 */
const permission = document.getElementById("permission");

displayNotification = () => {
  if ("serviceWorker" in navigator) {
    const options = {
      body: "Welcome to my service",
      icon: "/images/icons/icon-128x128.png",
      image: "/images/icons/icon-512x512.png",
      vibrate: [100, 50, 200, 50, 100],
      badge: "/images/icons/icon-96x96.png",
      tag: "confirm-notification",
      renotify: true,
      actions: [
        {
          action: "confirm",
          title: "Ok",
          icon: "/src/images/icons/icon-96x96.png"
        },
        {
          action: "cancel",
          title: "Cancel",
          icon: "/src/images/icons/icon-96x96.png"
        }
      ]
    };
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification("Successfully subscribed", options);
    });
  }
};

//Push Manager
configurePushSub = () => {
  let reg;
  navigator.serviceWorker.ready
    .then((swreg) => {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then((sub) => {
      if (sub === null) {
        //Create new subscription

        const vapidPublicKey =
          "BJ9o0wFz-VU961c6i1vUf6dtiXFIrZaNFONGImvG19E8lqvdkepDdSqUmJ2_yfPY5P-wTYyXzwM20x1hsdVr2Hk";

        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey
        });
      } else {
        //We have a subscription
      }
    })
    .then((newSub) => {
      return fetch("https://cambes-911a0.firebaseio.com/subscriptions.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newSub)
      });
    })
    .then((res) => {
      if (res.ok) {
        displayNotification();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

notificationPermission = () => {
  Notification.requestPermission((result) => {
    console.log("user choice", result);
    if (result !== "granted") {
      console.log("no notification permission granted");
    } else {
      /* displayNotification(); */
      configurePushSub();
      permission.classList.remove("blue");
      permission.classList.add("grey");
    }
  });
};

if ("Notification" in window && "serviceWorker" in navigator) {
  permission.style.display = "block";
  permission.addEventListener("click", notificationPermission);
}
