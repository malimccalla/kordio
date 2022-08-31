import Redis from 'ioredis';

const host = process.env.REDIS_HOST;
const port = process.env.REDIS_PORT;

if (!host) {
  throw new Error('No REDIS_HOST found in environment variables');
}

if (!port) {
  throw new Error('No REDIS_PORT found in environment variables');
}

const redis = new Redis({ host, port: parseInt(port, 10) });

redis.on('error', (error) => {
  console.log('Redis error: ', error);
});

export { redis };
