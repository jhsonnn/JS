import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
}
const root = ReactDOM.createRoot(document.getElementById("root")!);

const mock = async () => {
  const { worker } = await import("./mocks/browser");
  worker.start();
};

mock().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
