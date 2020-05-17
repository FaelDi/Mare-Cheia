var express = require('express');
var router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");


router.get('/', UsuarioController.index);
router.post("/cadastrar", UsuarioController.new);
router.delete('/delete/:id',UsuarioController.delete);
router.get('/busca/:id',UsuarioController.search);

router.get("/criar",UsuarioController.registroForm);
router.post("/criar",UsuarioController.new);

router.get("/login",UsuarioController.loginForm);
router.post("/login",UsuarioController.logarForm);


module.exports = router;