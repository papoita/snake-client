/** @format */
//global variable
let connectObjGlobal;

const setupInput = function (connectObj) {
	connectObjGlobal = connectObj;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on("data", handleUserInput); //if it matches the signature of the function -short version
	return stdin;
};
const handleUserInput = function (key) {
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
	// \u0003 maps to ctrl+c input
	if (key === "\u0003") {
		process.exit();
	}
};

//dependency through parameters
// const setupInput = function (connectObj) {
// 	const stdin = process.stdin;
// 	stdin.setRawMode(true);
// 	stdin.setEncoding("utf8");
// 	stdin.resume();
// 	stdin.on("data", (key) => handleUserInput(key, connectObj)); //it soesnt match the signature so write the function explicitly
// 	return stdin;
// };
// const handleUserInput = function (key, connectObj) {
// 	if (key == "\u001B\u005B\u0041") {
// 		connectObj.write("Move: up");
// 	}
// 	if (key == "\u001B\u005B\u0043") {
// 		connectObj.write("Move: right");
// 	}
// 	if (key == "\u001B\u005B\u0042") {
// 		connectObj.write("Move: down");
// 	}
// 	if (key == "\u001B\u005B\u0044") {
// 		connectObj.write("Move: left");
// 	}
// 	// \u0003 maps to ctrl+c input
// 	if (key == "\u0003") {
// 		process.exit();
// 	}
// };

module.exports = { setupInput };
