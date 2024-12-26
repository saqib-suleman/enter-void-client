"use client";
import { useQuery } from "@apollo/client";
import { HELLO } from "./queries";

export default function Home() {
  const { data } = useQuery(HELLO);

  return <div className="h-full w-full">{JSON.stringify(data)}</div>;
}
