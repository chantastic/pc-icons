(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var RoomSetup = function RoomSetup() {
    return React.createElement(
  "svg",
  { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-room-setup" },
  React.createElement(
    "title",
    { id: "title" },
    "room-setup icon"
  ),
  React.createElement(
    "g",
    { "data-name": "Rectangle 16 (Stroke)" },
    React.createElement("path", { "data-name": "path0 fill", className: "cls-1", d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 14.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5z", role: "presentation" })
  ),
  React.createElement("path", { "data-name": "path1 fill", className: "cls-1", d: "M8.749 3h-1.5l-.437 1.234a3.922 3.922 0 0 0-.635.263l-1.183-.562-1.059 1.059.565 1.183a3.923 3.923 0 0 0-.263.635L3 7.251v1.5l1.234.439a3.924 3.924 0 0 0 .263.635l-.563 1.184 1.059 1.059 1.184-.568a3.921 3.921 0 0 0 .635.263L7.251 13h1.5l.439-1.234a3.921 3.921 0 0 0 .635-.263l1.184.563 1.059-1.059-.568-1.184a3.926 3.926 0 0 0 .263-.635L13 8.749v-1.5l-1.234-.439a3.926 3.926 0 0 0-.263-.635l.563-1.184-1.06-1.056-1.183.565a3.923 3.923 0 0 0-.635-.263L8.749 3zM8 10.368A2.368 2.368 0 1 1 10.368 8 2.368 2.368 0 0 1 8 10.368z", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = RoomSetup;
  } else {
    global.ResourcesIcon = global.ResourcesIcon || {};
    global.ResourcesIcon.RoomSetup = RoomSetup;
  }
})(this)