const model=require('../models/personasScheme')
const index=async (req,res)=>{
let personasObj=await model.read();
    res.render('index', {persona: personasObj});
}

const alta=(req,res)=>{
    res.render('alta');
}

const cargar=async (req,res)=>{
    let personaObj=req.body;
    await model.create(personaObj);
    res.redirect('/');
}

const borrarM=async(req,res)=>{
let id=req.params.id
await model.borrar(id)
res.redirect('/');
}

const editarV=async(req,res)=>{
let id=req.params.id;
let personaObj= await model.readOne(id);
res.render('editar', {persona: personaObj})
}

const editar=async(req,res)=>{
let id=req.body.id;
let persona=req.body;
await model.edit(id,persona);
res.redirect('/');
}

module.exports.index=index
module.exports.alta=alta
module.exports.cargar=cargar
module.exports.borrarM=borrarM
module.exports.editarV=editarV
module.exports.editar=editar