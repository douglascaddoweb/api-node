import { Request, Response } from "express";
import { MongoUserRepository } from "../infrastructure/database/MongoUserRepository";
import { CreateUser } from "../useCases/createUser";
import { GetUsers } from "../useCases/GetUsers";

const userRepo = new MongoUserRepository();
const createUser = new CreateUser(userRepo);
const getUsers = new GetUsers(userRepo);
// Listar todos usuários
export const listUsers = async (_req: Request, res: Response) => {
  const users = await getUsers.execute();
  res.json(users);
};

// Criar usuário
export const createNewUser = async (_req: Request, res: Response) => {
  try {
    const { nome, email, senha } = _req.body;
    const user = await createUser.execute(nome, email, senha);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ erro: err.message });
  }
};
