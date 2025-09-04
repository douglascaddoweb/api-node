const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, {
  timestamps: true // cria automaticamente createdAt e updatedAt
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
