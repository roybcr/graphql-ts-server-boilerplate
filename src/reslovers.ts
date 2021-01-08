import { ResolversMap } from "./types/graphql-utils";

export const resolvers: ResolversMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) =>
      `Bye ${name || "World"}`,
  },
  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {},
  },
};
