import {gql} from "apollo-server-express";

export default gql`

    type User{
        id: Int!,
        name: String!,
        email: String!,
        password: String!
    }

    type Auth{
        token: String!
        user: User!
    }

    extend type Mutation{
        createUser(name: String!, email: String!, password: String!): Auth!
        login(email: String!, password: String!): Auth!
    }
`;