(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var PersonOutline = function PersonOutline() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-person-outline" },
  React.createElement(
    "title",
    { id: "title" },
    "person-outline icon"
  ),
  React.createElement(
    "g",
    { id: "Layer_1", "data-name": "Layer 1" },
    React.createElement("path", { d: "M11.65,15.84h-7A2.67,2.67,0,0,1,2,13.12v-.91a.91.91,0,0,1,.49-.81L5.26,10l-.5-1a.93.93,0,0,1-.1-.42V5a3.57,3.57,0,0,1,3.5-3.62A3.57,3.57,0,0,1,11.65,5V8.6a.93.93,0,0,1-.1.42L11,10l2.74,1.4a.91.91,0,0,1,.49.81v.91A2.67,2.67,0,0,1,11.65,15.84ZM3.77,12.78v.34a.89.89,0,0,0,.88.91h7a.89.89,0,0,0,.88-.91v-.34L9.46,11.22A.9.9,0,0,1,9,10.69a.93.93,0,0,1,.06-.7L9.9,8.37V5A1.75,1.75,0,1,0,6.4,5V8.37L7.22,10a.93.93,0,0,1,.06.7.9.9,0,0,1-.45.53Z", role: "presentation" })
  )
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = PersonOutline;
  } else {
    global.CcoIcon = global.CcoIcon || {};
    global.CcoIcon.PersonOutline = PersonOutline;
  }
})(this)