(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Check = function Check() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-check" },
  React.createElement(
    "title",
    { id: "title" },
    "check icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M15.872 4.542l-2.415-2.415a.184.184 0 0 0-.261 0L6.118 9.205a.184.184 0 0 1-.261 0L2.689 6.037a.184.184 0 0 0-.261 0L.087 8.379a.184.184 0 0 0 0 .261L5.9 14.454a.222.222 0 0 0 .315 0L15.872 4.8a.184.184 0 0 0 0-.258z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Check;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Check = Check;
  }
})(this)