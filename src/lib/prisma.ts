import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // O Prisma faz automaticamente os logs de todos os SQLs execultados no banco de dados (todas as querys).
})
