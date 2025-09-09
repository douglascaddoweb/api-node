import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class CreateUser {
  constructor(private userRepo: IUserRepository) {}

  async execute(nome: string, email: string, senha: string): Promise<User> {
    const userExistente = await this.userRepo.findByEmail(email);
    if (userExistente) {
      throw new Error("E-mail já cadastrado");
    }

    const novoUser = new User({nome, email, senha}); // aqui poderia ser UUID
    return this.userRepo.create(novoUser);
  }
}
