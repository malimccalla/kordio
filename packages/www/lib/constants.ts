export const isBrowser = typeof window !== 'undefined';

// In local development these are defined in a .env.local file
export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const DEPLOY_ENV = process.env.NEXT_PUBLIC_DEPLOY_ENV;
