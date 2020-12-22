
const listar = (base, limite)=>{
    let data = ''
    for(let i = 1; i <= limite; i++){
        let resultado = base * i;
        data += `La multiplicacion de ${base}*${i} es ${resultado}\n`
    }
    return data;
};


const multiplicar = async (base, limite) =>{
    let data = '';
    try{
        for(let i = 1; i <= limite; i ++){
            let resultado = base * i;
            //let data = `La multiplicacion de ${base}*${i} es ${resultado}`
            data += `La multiplicacion de ${base}*${i} es ${resultado}\n`
            
        };
        return data
    }
    catch(err){
        throw new Error(`El error es ${err}`)
    }
    

};

module.exports = {
    multiplicar,
    listar
}