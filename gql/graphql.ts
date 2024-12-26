/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  user_create: User;
  user_delete: Scalars['String']['output'];
};


export type MutationUser_CreateArgs = {
  userCreateInput: CreateUserInput;
};


export type MutationUser_DeleteArgs = {
  id: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  authorId: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  post_list: Array<Post>;
  sayHello: Scalars['String']['output'];
  user_get: User;
  user_listAll: Array<User>;
};


export type QueryPost_ListArgs = {
  userEmail: Scalars['String']['input'];
};


export type QueryUser_GetArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  posts: Array<Post>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userNmae?: Maybe<Scalars['String']['output']>;
};

export type SayHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type SayHelloQuery = { __typename?: 'Query', sayHello: string };


export const SayHelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sayHello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sayHello"}}]}}]} as unknown as DocumentNode<SayHelloQuery, SayHelloQueryVariables>;