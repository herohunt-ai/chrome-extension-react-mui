import ReactDOM from "react-dom/client";
import App from "./App";

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

injectReact();
