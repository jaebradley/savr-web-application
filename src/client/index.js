import ApolloClient from 'apollo-boost';
import {
  ApolloLink,
} from 'apollo-link';
import {
  HttpLink,
} from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: `${process.env.SERVER_BASE_URL}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('authToken')}`,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
});

export default client;
