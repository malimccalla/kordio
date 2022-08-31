import { ApolloClient } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import * as cookie from 'cookie';
import * as React from 'react';

import initApollo from './initApollo';

const isBrowser = typeof window !== 'undefined';

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

function parseCookies(req: any = null, options = {}) {
  if (req) {
    return req.headers.cookie || '';
  } else {
    const parsedCookie = cookie.parse(document.cookie, options);

    return parsedCookie['ksib'];
  }
}

const withApollo = (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;

    static async getInitialProps(ctx: any) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;
      const apollo = initApollo({}, { getToken: () => parseCookies(req) });

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      // Run all graphql queries in the component tree
      // and extract the resulting data
      if (!isBrowser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // tslint:disable-next-line:max-line-length
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return { ...appProps, apolloState };
    }

    apolloClient: ApolloClient<any>;

    constructor(props: any) {
      super(props);
      // `getDataFromTree` renders the component first,
      // the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => parseCookies(),
      });
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};

// TODO: Use this instead of withApollo for fast refresh
// export function useApollo(pageProps: any) {
//   const state = pageProps[APOLLO_STATE_PROP_NAME];
//   const store = React.useMemo(
//     () => initApollo(state, { getToken: () => parseCookies() }),
//     [state]
//   );
//   return store;
// }

export default withApollo;
