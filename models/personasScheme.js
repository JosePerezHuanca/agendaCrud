const mongoose=require('mongoose');
const db=require('./db');

let personaSchema=mongoose.Schema({
    nombre: {
        type: String,
        required: 'Es necesario un nombre'
    },
    mail:{
        type: String,
        required: 'Es necesario un mail'
    },
 telefono: {
        type: Number,
        required: 'Es necesario telefono'
    }
})

const PersonaModel=mongoose.model('personas', personaSchema);
async function create(persona){
 try{
let personaM= new PersonaModel(persona);
await personaM.save();
 }   
 catch(error){
console.log(error.message);
 }
}

async function read(){
    try{
let personas=await PersonaModel.find();
return personas;
    }
    catch(error){
        console.log(error.message);
    }
}

async function readOne(id){
try{
let persona= await PersonaModel.findOne({_id:  id});
return persona;
}
catch(error){
    console.log(error.message);
}
}

async function borrar(id){
try{
await PersonaModel.deleteOne({_id:id})
}
catch(error){
console.log(error.message);
}
}

async function edit(id, persona){
    try{
await PersonaModel.updateOne({_id: id},{$set: persona});
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports={create, read, readOne, borrar, edit};