import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Interface para tipagem
export interface IUser extends Document {
  _id: string;
  nome: string;
  email: string;
  senha: string;
  criadoEm: Date;
}

// Schema do usuário
const UserSchema: Schema<IUser> = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: true,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

// Exporta o modelo tipado
const User = mongoose.model<IUser>("User", UserSchema);

export default User;  // 🔹 Isso garante que o arquivo é um módulo