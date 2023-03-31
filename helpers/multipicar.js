const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = '';

    // for(t=1; t<=10; t++){
    for (i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${(base*i)}\n`;
      consola += `${colors.yellow(base)} ${'x'.red } ${colors.yellow(i)} ${'='.blue} ${colors.brightWhite(base*i)}\n`;
      // consola += colors.yellow(base) + ' x ' .red + colors.yellow(i) + ' = ' .blue + (colors.brightWhite(base*i)) + '\n';
      // };

      // salida = '';
      // base++;
    }
    if (listar) {
      console.log("================".cyan);
      console.log(`La tabla del ${base}` .trap .rainbow);
      console.log("================".cyan);
      console.log(consola);
    }
    let nombreArchivo = `./salida/base-${base}.txt`;
    fs.writeFileSync(nombreArchivo, salida);
    return nombreArchivo.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
