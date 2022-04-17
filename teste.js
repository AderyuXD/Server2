import { createRequire } from "module";
const require = createRequire(import.meta.url);

const valor = require("./moduloTeste.cjs");

console.log("Valor: ", valor);