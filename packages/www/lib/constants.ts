export const isBrowser = typeof window !== 'undefined';

// In local development these are defined in a .env.local file
export const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
