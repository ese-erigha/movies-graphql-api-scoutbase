import {gql} from "apollo-server-express";

export default gql`
    scalar Date

    type Person{
        name: String!
        birthday: Date!
        country: Country!
    }
`;