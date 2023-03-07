import { User } from "./User";

export interface UserRepository {
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  getUserById(id: number): Promise<User | null>;
}
