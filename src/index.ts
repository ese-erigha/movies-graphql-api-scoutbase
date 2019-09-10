

require("dotenv").config();
import express from 'express';
import http from 'http';
import cors from 'cors';
import {urlencoded,json} from 'body-parser';
import morgan from 'morgan';
import {ApolloServer} from 'apollo-server-express';
import graphqlSchema from "./graphiql/schema";
import resolvers from "./graphiql/resolvers";
import models  from "./database/models";
import {getAccessTokenFromRequestHeaders, getUserFromAuthToken} from "./utils/auth";
import schemaDirectives from "./graphiql/directives";
const { PORT = 3000} = process.env;

const app = express();

app.use(cors());

// Express morgan logs
app.use(morgan('combined'));


// Parse application/x-www-form-urlencoded
app.use(urlencoded({extended: true}));

// Parse application/json
app.use(json());


const server = new ApolloServer({
    typeDefs: graphqlSchema,
    resolvers,
    schemaDirectives,
    formatError: error => {
      // remove the internal sequelize error message
      // leave only the important validation error
      const message = error.message
        .replace('SequelizeValidationError: ', '')
        .replace('Validation error: ', '');
  
      return {
        ...error,
        message,
      };
    },
    context: async({req})=>{
        const token = getAccessTokenFromRequestHeaders(req);
        
        return {
          user: (token) ? await getUserFromAuthToken(token) : null
        };
      }
  });
  
  server.applyMiddleware({app, path: '/graphql'});
  
  const httpServer = http.createServer(app);

  models.sequelize
      .authenticate()
      .then(()=>{
        httpServer.listen(PORT, () => {
          console.log('server started at http://localhost:'+PORT);
        });
      })
      .catch(err=>console.log(err));

