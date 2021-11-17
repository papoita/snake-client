/** @format */

const net = require("net");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: "localhost",
		port: 50541,
	});
	conn.on("connect", () => {
		console.log("Successfully connected to snake game server");
		conn.write("Name:PAO");
	});
	// interpret incoming data as text
	conn.setEncoding("utf8");
	conn.on("connect", () => {
		conn.write("move up");
	});

	return conn;
};

module.exports = { connect };
