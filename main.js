import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  <h1>Test</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
