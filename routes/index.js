const express=require('express');
const router=express.Router();
let home=require('../controllers/home')

router.get('/', home.index);
router.get('/alta', home.alta);
router.post('/alta', home.cargar);
router.get('/:id', home.borrarM);
router.get('/editar/:id', home.editarV);
router.post('/editar', home.editar);

module.exports=router;