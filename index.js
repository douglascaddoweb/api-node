const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Conexão com MongoDB (use sua própria URL do Mongo Atlas ou local)
mongoose.connect("mongodb://root:example@localhost:27017/api_node?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado ao MongoDB"))
.catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Importa rotas
const usuariosRoutes = require("./routes/usuarios");
app.use("/usuarios", usuariosRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à API com MongoDB 🚀");
});

// Sobe o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
