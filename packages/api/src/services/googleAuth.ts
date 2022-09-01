import { google } from 'googleapis';

const googleConfig = {
  clientId: process.env.GOOGLE_AUTH_LOGIN_ID,
  clientSecret: process.env.GOOGLE_AUTH_LOGIN_SECRET,
  // The redirect url must match the value on the GCP dashboard
  redirect: process.env.GOOGLE_AUTH_LOGIN_REDIRECT,
};

const googleAuth = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

/**
 * This scope tells google what information we want to request.
 */
const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
const getGoogleAuthConnectionUrl = (state: string | undefined) => {
  return googleAuth.generateAuthUrl({
    state,
    access_type: 'offline',
    prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope,
  });
};

/**
 * Extract the user info and the auth tokens from the "code" parameter.
 */
export const getGoogleAccountFromCode = async (code: string) => {
  // get the auth "tokens" from the request
  const data = await googleAuth.getToken(code);
  const tokens = data.tokens;

  // add the tokens to the google api so we have access to the account
  googleAuth.setCredentials(tokens);

  const oauth2 = google.oauth2({ auth: googleAuth, version: 'v2' });

  const userInfo = await oauth2.userinfo.get();

  // return so we can login or sign up the user
  return {
    userInfo: userInfo.data,
    tokens, // we can save these to the user if we ever want to get their details without making them log in again
  };
};

/**
 * Create the google url to be sent to the client.
 */
export const getGoogleAuthUrl = (state: string | undefined) => {
  const url = getGoogleAuthConnectionUrl(state);

  return url;
};

export const verifyGoogleIdToken = async (idToken: string) => {
  const loginTicket = await googleAuth.verifyIdToken({
    audience: googleConfig.clientId!,
    idToken,
  });

  const userGoogleId = loginTicket.getUserId();

  return userGoogleId;
};
