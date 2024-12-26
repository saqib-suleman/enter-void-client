import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.API_URL}/graphql` || "http://localhost:4001/graphql",
  documents: "./app/**/*.ts",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
    "gql/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "gql/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
