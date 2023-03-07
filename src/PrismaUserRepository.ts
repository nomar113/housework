import { PrismaClient } from '@prisma/client'

import { User } from './User'
import { UserRepository } from './UserRepository'

const prisma = new PrismaClient()

export class PrismaUserRepository implements UserRepository {
  async getAllUsers() {
    const users = await prisma.user.findMany()
    return users
  }

  async createUser(user: User): Promise<User> {
    const newUser = await prisma.user.create({ data: user })
    return newUser
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } })
    return user
  }
}
