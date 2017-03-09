(function (global) {
  "use strict"

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react")
  } else {
    React = global.React
  }

  var CompassIcon = function CompassIcon() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-compass" },
  React.createElement(
    "title",
    { id: "title" },
    "compass icon"
  ),
  React.createElement("path", { d: "M8 .13A7.87 7.87 0 1 0 15.89 8 7.89 7.89 0 0 0 8 .13zm0 14.64A6.77 6.77 0 1 1 14.79 8 6.79 6.79 0 0 1 8 14.77zM8 2.3A5.7 5.7 0 1 0 13.71 8 5.71 5.71 0 0 0 8 2.3zm0 10.76A5.06 5.06 0 1 1 13.07 8 5.07 5.07 0 0 1 8 13.06zm2.41-7.89L7.06 6.92a.33.33 0 0 0-.14.14l-1.77 3.36a.32.32 0 0 0 .44.44l3.35-1.79L9 9l1.85-3.4a.32.32 0 0 0-.43-.44zM7.29 7.75l1 1-2 1.09zm1.42.51l-1-1 2-1.07z", fill: "#231f20", "data-name": "Layer 1", role: "presentation" })
);
  }

  if (typeof module === "object" && module.exports) {
    module.exports = CompassIcon
  } else {
    global.CompassIcon = CompassIcon
  }
})(this)