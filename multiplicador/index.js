const fs = require('fs');
const {logica} = require('./logica');

const multiplicar = (base) => {
    console.log('===================');
    console.log(`Tabla del ${base}`); 
    console.log('===================');

   const resultado = logica(base);

    console.log(resultado);
    const nombreArchivo = `tabla-del-${base}`
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado!`);
    });
}

module.exports = {
    multiplicar
}