import { URL_BACK_SERVER } from '@env'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: `${URL_BACK_SERVER}/graphql`,
  cache: new InMemoryCache(),
});

export { ApolloProvider, client };
