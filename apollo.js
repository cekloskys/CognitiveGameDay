import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import 'localstorage-polyfill';

const URI = 'https://chcmobileapps.ddns.net';
const androidURI = 'http://localhost:4000/';

const httpLink = createHttpLink({
  uri: URI,
  // uri: androidURI,
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  //if (!token) localStorage.setItem('token', '')
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getAllPosts: {
            merge: true
            },
          },
        },
      },
    },
  ),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  },
});
