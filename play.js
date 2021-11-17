/** @format */

const net = require("net");
const { connect } = require("./client");

// establishes a connection with the game server
const setupInput = function () {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on("data", handleUserInput);
	return stdin;
};

const handleUserInput = function (key) {
	if (key == "\u001B\u005B\u0041") {
		process.stdout.write("up");
	}
	if (key == "\u001B\u005B\u0043") {
		process.stdout.write("right");
	}
	if (key == "\u001B\u005B\u0042") {
		process.stdout.write("down");
	}
	if (key == "\u001B\u005B\u0044") {
		process.stdout.write("left");
	}
	// \u0003 maps to ctrl+c input
	if (key == "\u0003") {
		process.exit();
	}
};

setupInput();

console.log("Connecting ...");
connect();

module.exports = { setupInput };
