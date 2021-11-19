/** @format */

const { keyPressed } = require("./constants");
let connectObjGlobal;

const setupInput = function(connectObj) {
  connectObjGlobal = connectObj;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (keyPressed[key]) {
    connectObjGlobal.write(keyPressed[key]);
  }
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u001B\u005B\u0041") {
    connectObjGlobal.write("Move: up");
  }
  if (key === "\u001B\u005B\u0043") {
    connectObjGlobal.write("Move: right");
  }
  if (key === "\u001B\u005B\u0042") {
    connectObjGlobal.write("Move: down");
  }
  if (key === "\u001B\u005B\u0044") {
    connectObjGlobal.write("Move: left");
  }
};

module.exports = { setupInput };
