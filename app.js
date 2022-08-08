const express=require('express');
const indexRouter=require('./routes/index');
const app=express();
const path=require('path');
const morgan=require('morgan');
const db=require('./models/db')
db.conectar();

//Definiendo motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Cargando middlewares
//midlewares que procesan las peticiones
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
//Rutas
app.use('/', indexRouter);
//Sirviendo archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//probando rutas simples
app.get('/hi', (req,res)=>{
res.send('Hola');
})

//probando rutas con parametros
app.get('/persona/:nombre/:edad',(req,res)=>{
let nombre=req.params.nombre;
let edad=req.params.edad;
res.send(req.params);
})


const server=app.listen(8080);
console.log('Ok');
module.exports=app;