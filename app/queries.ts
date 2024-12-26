import { graphql } from "@/gql";

export const HELLO = graphql(`
  query sayHello {
    sayHello
  }
`);
