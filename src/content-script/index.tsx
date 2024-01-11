import ReactDOM from "react-dom/client";
import App from "./App";

function injectFont() {
  // Example of injecting a font in the content script
  const style = document.createElement("style");
  style.innerHTML =
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap')";
  document.head.appendChild(style);
}

function injectReact() {
  const root = document.createElement("div");

  // Example of injecting and styling the React root
  root.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999
  `;
  document.body.appendChild(root);

  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(<App />);
}

injectFont();
injectReact();
