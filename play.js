/** @format */

const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

// establishes a connection with the game server

console.log("Connecting ...");
let connectObj = connect();

setupInput(connectObj);
module.exports = { setupInput };
