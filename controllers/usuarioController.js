const Usuario = require("../models/Usuario");

// Listar todos usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
};

// Criar usuário
exports.criarUsuario = async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json({ mensagem: "Usuário criado!", usuario: novoUsuario });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar usuário", detalhes: err });
  }
};
