console.log("Hello World from background script!");

// Example of how to set up listeners
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("Hello world on install!");
  }
});
