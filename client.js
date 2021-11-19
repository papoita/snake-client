/** @format */

const net = require("net");
const { HOST, PORT, NAME } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: HOST,
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to snake game server");
    conn.write(NAME);
    console.log("after name");
  });
  return conn;
};

module.exports = { connect };
