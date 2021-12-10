function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
};

// window.addEventListener("orientationchange", function(){
//   console.log(screen.orientation.type); // e.g. portrait
//   screen.orientation.lock('paysage');
// });
