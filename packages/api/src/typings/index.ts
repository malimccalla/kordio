import { PrismaClient } from '@prisma/client';
import { Session as ExpressSession } from 'express-session';
import { Redis } from 'ioredis';

export interface Session extends ExpressSession {
  userId?: string;
}

export interface Context {
  prisma: PrismaClient;
  session: Session;
  redis: Redis;
}
