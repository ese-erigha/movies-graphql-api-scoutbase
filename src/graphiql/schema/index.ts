import { gql } from 'apollo-server-express'
import MovieSchema from "./movie";
import UserSchema from "./user";
import PersonSchema from "./person";
import CountrySchema from "./country";


const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema,CountrySchema,PersonSchema,MovieSchema,UserSchema];