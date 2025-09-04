import { Router } from "express";
import { createUser, listUsers } from "../controllers/usuarioController";

const router = Router();

// Criar usuário
router.post("/", createUser);
// Listar usuários
router.get("/", listUsers);

export default router;
