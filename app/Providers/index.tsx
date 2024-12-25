"use client";
import { client } from "@/server/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ClerkProvider>{children}</ClerkProvider>
    </ApolloProvider>
  );
};

export default Providers;
