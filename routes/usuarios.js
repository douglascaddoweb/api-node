const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarioController");

router.get("/", usuariosController.listarUsuarios);
router.post("/", usuariosController.criarUsuario);

module.exports = router;