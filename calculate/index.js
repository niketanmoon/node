// import { calculateMuliplication } from "./multiply.js";
// import { calculateSum } from "./sum.js";

// export { calculateMuliplication, calculateSum };

const { calculateMuliplication } = require("./multiply");
const { calculateSum } = require("./sum");

module.exports = { calculateSum, calculateMuliplication };
