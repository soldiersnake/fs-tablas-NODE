// const fs = require('fs');
const { crearArchivo } = require("./helpers/multipicar");
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv);
// const [,,arg3] = process.argv;
// const [,base = 5] = arg3.split('=')
// console.log(argv);
// console.log("base: yargs: ", argv.b);

// let base = 5;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado".red .bgWhite))
  .catch((err) => console.log(err));
