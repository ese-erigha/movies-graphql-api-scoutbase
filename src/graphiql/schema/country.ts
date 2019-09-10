import {gql} from "apollo-server-express";

export default gql`
    type Country{
        name: String!
    }
`;