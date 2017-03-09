(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var GeoPinOutline = function GeoPinOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-geo-pin-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "geo-pin-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,0A5.85,5.85,0,0,0,2.31,6,6.07,6.07,0,0,0,3.41,9.55l3.8,6a.92.92,0,0,0,1.58,0l3.77-5.93A6.13,6.13,0,0,0,13.69,6,5.85,5.85,0,0,0,8,0Zm3,8.42L8,13.18,5,8.4A4.08,4.08,0,0,1,4.2,6,3.9,3.9,0,0,1,8,2a3.9,3.9,0,0,1,3.8,4A4.15,4.15,0,0,1,11,8.44ZM7.33,5.3a1,1,0,0,0,0,1.42.93.93,0,0,0,1.35,0,1,1,0,0,0,0-1.42A1,1,0,0,0,7.33,5.3Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = GeoPinOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.GeoPinOutline = GeoPinOutline;
  }
})(this)