if ("serviceWorker" in navigator && "SyncManager" in window) {
  navigator.serviceWorker.ready(
    then((sw) => {
      const post = {
        id: new Date().toISOString(),
        title: "input",
        location: "input"
      };
      //indexedDB
      //0. initialize a new indexedDB database
      //1. writeData function
      sw.sync.register("sync-new-contact");
    })
  );
}

//add falback with some visual effect for leting the user know it hasn't work and send the data as a post
