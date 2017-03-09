(function (global) {
  "use strict";

  var React = void 0;

  if (typeof module === "object" && module.exports) {
    React = require("react");
  } else {
    React = global.React;
  }

  var Linkedin = function Linkedin() {
    return React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "symbol symbol-linkedin" },
  React.createElement(
    "title",
    { id: "title" },
    "linkedin icon"
  ),
  React.createElement("path", { "class": "cls-1", d: "M.065 15.2h3.393V5.269H.065zM1.754.8A1.7 1.7 0 0 0 .021 2.466 1.7 1.7 0 0 0 1.754 4.13a1.7 1.7 0 0 0 1.734-1.664A1.7 1.7 0 0 0 1.754.8zm14.175 8c0-1.758-1.534-3.514-4.37-3.514-1.429 0-2.663.12-3.532 1.134V5.3H4.6v9.9H8V8.671a2.4 2.4 0 0 1 1.956-1.13c2.176-.085 2.566 1 2.566 2.427V15.2h3.408z", "data-name": "Layer 1", role: "presentation" })
);;
  }

  if (typeof module === "object" && module.exports) {
    module.exports = Linkedin;
  } else {
    global.PeopleIcon = global.PeopleIcon || {};
    global.PeopleIcon.Linkedin = Linkedin;
  }
})(this)