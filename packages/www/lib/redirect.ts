import { Context } from '@apollo/client';
import Router from 'next/router';

// Taken from Next JSs example of redirecting in `getInitialProps`
// @see {@link https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60}
export const redirect = (
  context: Context | Partial<Context>,
  target: string,
  push = false
): Record<string, unknown> => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    if (push) {
      Router.push(target).then(() => window.scrollTo(0, 0));
    } else {
      Router.replace(target).then(() => window.scrollTo(0, 0));
    }
  }

  return {};
};
