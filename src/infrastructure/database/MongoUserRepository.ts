import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUserProps, User } from "../../domain/entities/User";
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IUserDoc extends Document {
  
  _id: string;
  nome: string;
  email: string;
  senha: string;
}

const UserSchema = new Schema<IUserDoc>({
  _id: { type: String, default: uuidv4 }, // se quiser UUID
  nome: String,
  email: { type: String, unique: true },
  senha: String
});

const UserModel = mongoose.model<IUserDoc>("User", UserSchema);

export class MongoUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const doc = new UserModel(user);
    await doc.save();
    return {...user, id: doc._id.toString()} as User;
  }

  async findAll(): Promise<User[]> {
    const docs = await UserModel.find();
    return docs.map((d) => new User({id: d._id.toString(), nome: d.nome, email: d.email, senha: d.senha} as IUserProps));
  } 

  async findByEmail(email: string): Promise<User | null> {
    const doc = await UserModel.findOne({ email });
    if (!doc) return null;
    return new User({id: doc._id.toString(), nome: doc.nome, email: doc.email, senha: doc.senha} as IUserProps);
  }
}
