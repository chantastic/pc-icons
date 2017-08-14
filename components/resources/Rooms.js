(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Rooms = function Rooms() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-rooms" },
  React.createElement(
    "title",
    { id: "title" },
    "rooms icon"
  ),
  React.createElement("path", { className: "cls-1", d: "M5 0H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM14 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM5 9H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm.5 5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM14 9h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm.5 5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Rooms;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.Rooms = Rooms;
  }
})(this)