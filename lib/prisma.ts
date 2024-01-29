//here we just export the Prisma Client as a variable "prisma" so we can call it from
//anywhere in our application

import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

