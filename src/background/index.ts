console.log("Hello World from background script!");

// This is an example of how to set up listeners
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("Hello world on install!");
  }
});
