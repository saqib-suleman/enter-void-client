"use client";
import { gql, useQuery } from "@apollo/client";

const HELLO = gql`
  query sayHello {
    sayHello
  }
`;

export default function Home() {
  const { data } = useQuery(HELLO);

  return <div className="h-full w-full">{JSON.stringify(data)}</div>;
}
