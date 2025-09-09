export interface IBaseRepository<T> {
  create(user: T): Promise<T>;
  findAll(): Promise<T[]>;
}