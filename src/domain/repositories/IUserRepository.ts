import { User } from "../entities/User";
import { IBaseRepository } from "./IBaseRespository";

export interface IUserRepository extends IBaseRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
