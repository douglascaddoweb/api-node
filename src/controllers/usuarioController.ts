import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";

// Listar todos usuários
export const listUsers = async (_req: Request, res: Response) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
};

// Criar usuário
export const createUser = async (_req: Request, res: Response) => {
  try {
    const { nome, email, senha } = _req.body;

    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ erro: "E-mail já cadastrado" });
    }

    const novoUsuario: IUser = new User({ nome, email, senha });
    await novoUsuario.save();

    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar usuário", detalhes: err });
  }
};
