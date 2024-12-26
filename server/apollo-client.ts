import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token: string) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp ? decodedToken.exp < currentTime : true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("jwt-token");

  if (token && !isTokenExpired(token)) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  } else {
    const { token } = await fetch("/api/get-token").then((res) => res.json());

    localStorage.setItem("jwt-token", token);

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  fetch: (uri, options) => {
    const operationName = JSON.parse(options?.body as string).operationName;
    return fetch(
      `${uri}${operationName ? `?op=${operationName}` : ""}`,
      options,
    );
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
