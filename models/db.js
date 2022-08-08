const mongoose=require('mongoose');
let conexion=false;

async function conectar(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mibase',{useNewUrlParser: true, useUnifiedTopology: true})
        conexion=true;
        console.log('conectado');
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports={conectar,conexion};