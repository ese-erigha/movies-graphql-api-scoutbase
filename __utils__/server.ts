
import {ApolloServer} from "apollo-server-express";
import typeDefs from "../src/graphiql/schema";
import resolvers from "../src/graphiql/resolvers";
import schemaDirectives from "../src/graphiql/directives";

export const createTestServer = (context = {})=>{

    return new ApolloServer({
        typeDefs,
        resolvers,
        schemaDirectives,
        context
    });
};