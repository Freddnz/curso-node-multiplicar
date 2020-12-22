const fs = require('fs');
const { multiplicar, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let argv2 = process.argv;
//let base = 9;
//let argv = process.argv;
//let params = argv[2];
//let base = params.split('=')[1];
//console.log(base);


//console.log('Limite',argv.limite);
//console.log(argv2);


let comando = argv._[0];
//console.log(comando);
console.log(argv)

switch(comando){
    case 'listar':
        resultado = listar(argv.base, argv.limite);
        console.log(resultado);
    break;

    case 'crear':
        const createFile = async () =>{
            resultado = await multiplicar(argv.base, argv.limite);
        
            fs.writeFile(`tablas/Tabla-${argv.base}.txt`, resultado, 'utf8',(err)=>{
                if(err){
                    throw new Error(err);
                }
                console.log(`the file has been saved`);
            });
        };
        createFile();
    break;

    default:
        console.log('comando no reconocido');
}











