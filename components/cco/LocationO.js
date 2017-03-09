(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var LocationO = function LocationO() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-location-o" },
  React.createElement(
    "title",
    { id: "title" },
    "location-o icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M8,4.75A3.25,3.25,0,1,0,11.25,8,3.25,3.25,0,0,0,8,4.75ZM8,6.44A1.56,1.56,0,1,1,6.44,8,1.56,1.56,0,0,1,8,6.44Z", style: "fill:#010101", role: "presentation" }),
    React.createElement("path", { d: "M14.9,7.25h-.7A6.25,6.25,0,0,0,8.75,1.8V1.1a.75.75,0,0,0-1.5,0v.7A6.25,6.25,0,0,0,1.8,7.25H1.1a.75.75,0,0,0,0,1.5h.7A6.25,6.25,0,0,0,7.25,14.2v.6a.75.75,0,0,0,1.5,0v-.6A6.25,6.25,0,0,0,14.2,8.75h.7a.75.75,0,0,0,0-1.5ZM8,12.66A4.66,4.66,0,1,1,12.66,8,4.66,4.66,0,0,1,8,12.66Z", style: "fill:#010101", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = LocationO;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.LocationO = LocationO;
  }
})(this)