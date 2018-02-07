(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Duplicate = function Duplicate() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title-duplicate", role: "img", className: "symbol symbol-duplicate" },
  React.createElement("path", { d: "M2.7 4H1.3v9.3c0 .7.6 1.3 1.3 1.3H12v-1.3H2.7V4zm10.6-2.7h-8c-.7 0-1.3.6-1.3 1.4v8c0 .7.6 1.3 1.3 1.3h8c.7 0 1.3-.6 1.3-1.3v-8c.1-.8-.5-1.4-1.3-1.4zm-.6 6H10V10H8.7V7.3H6V6h2.7V3.3H10V6h2.7v1.3z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Duplicate;
  } else {
    global.ServicesIcon = global.ServicesIcon || {};
    global.ServicesIcon.Duplicate = Duplicate;
  }
})(this)