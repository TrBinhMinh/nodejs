// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");
const calc1 = new Calculator();
console.log(calc1.add(20, 44));

// exports
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(4, 100));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
