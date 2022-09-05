export const isBrowser = typeof window !== 'undefined';

// In development these are defined in next.config.js
export const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
