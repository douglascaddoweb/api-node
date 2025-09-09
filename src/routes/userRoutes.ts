import { Router } from "express";
import { createNewUser, listUsers } from "../controllers/usuarioController";

const router = Router();

// Criar usuário
router.post("/", createNewUser);
// Listar usuários
router.get("/", listUsers);

export default router;
