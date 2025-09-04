import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware para JSON
app.use(express.json());

app.use("/api", routes);

// Conexão com MongoDB (use sua própria URL do Mongo Atlas ou local)
console.log("🔗 Conectando ao MongoDB...", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI as string)
.then(() => {
  console.log("✅ Conectado ao MongoDB")
  // Sobe o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
})
.catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));
