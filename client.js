/** @format */

const net = require("net");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: "10.0.2.15",
		port: 50541,
	});
	conn.setEncoding("utf8");
	conn.on("data", (data) => {
		console.log("Server says: ", data);
	});
	conn.on("connect", () => {
		console.log("Successfully connected to snake game server");
		conn.write("Name: PAO");
		console.log("after name");
		// conn.write("Move: up");
		// conn.write("Move: up");
		// conn.write("Move: up");
		// conn.write("Move: up");
	});
	// interpret incoming data as text

	return conn;
};

module.exports = { connect };
