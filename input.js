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
	if (key === "\u001B\u005B\u0041" || key === "w") {
		connectObjGlobal.write();
	}
	if (key === "\u001B\u005B\u0043" || key === "d") {
		connectObjGlobal.write("Move: right");
	}
	if (key === "\u001B\u005B\u0042" || key === "s") {
		connectObjGlobal.write("Move: down");
	}
	if (key === "\u001B\u005B\u0044" || key === "a") {
		connectObjGlobal.write("Move: left");
	}
	if (key === "z") {
		connectObjGlobal.write("Say: Soo fast");
	}
	if (key === "x") {
		connectObjGlobal.write("Say: HUNGRY YUM!!!!");
	}
	if (key === "c") {
		connectObjGlobal.write("Say: Sharing is caring");
	}
	// \u0003 maps to ctrl+c input s
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
