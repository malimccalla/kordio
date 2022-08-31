import { PrismaClient } from '@prisma/client';
import { Session } from 'express-session';

export interface Context {
  prisma: PrismaClient;
  session: Session;
}
