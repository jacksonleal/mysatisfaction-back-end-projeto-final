"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;

_app.default.listen(port, () => {
  console.log(`app running on port ${port}`);
});