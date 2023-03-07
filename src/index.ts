import express from "express";

import { PrismaUserRepository } from './PrismaUserRepository'
import { UserRepository } from './UserRepository'

const app = express();
app.use(express.json());

const userRepository: UserRepository = new PrismaUserRepository();

app.get("/users", async (req, res) => {
  const users = await userRepository.getAllUsers();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const userCreated = await userRepository.createUser(user);
  res.json(userCreated);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
