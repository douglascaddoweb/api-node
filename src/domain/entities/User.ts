export interface IUserProps {
    id?: string;
    nome: string;
    email: string;
    senha: string;
  
}
export class User {
  constructor(
      props: IUserProps
  ) {
    Object.assign(this, props);
  }

  static toDomain(doc: any): User {
    return new User({
        id: doc._id.toString(),
        nome: doc.nome,
        email: doc.email,
        senha: doc.senha,
    });
  
  }
}