import {gql} from "apollo-server-express";

export default gql`
    directive @isAuthorized on FIELD_DEFINITION
    type Movie{
        scoutbase_rating: Float @isAuthorized
        title: String!
        year: Int!
        rating: Int!
        actors: [Person!]
        directors: [Person!]
    }

    extend type Query{
        movies: [Movie!]!
    }
`;