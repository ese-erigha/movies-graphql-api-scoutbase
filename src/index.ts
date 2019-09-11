

require("dotenv").config();
import express from 'express';
import http from 'http';
import cors from 'cors';
import {urlencoded,json} from 'body-parser';
import morgan from 'morgan';
import {ApolloServer} from 'apollo-server-express';
import depthLimit from "graphql-depth-limit";
import graphqlSchema from "./graphiql/schema";
import resolvers from "./graphiql/resolvers";
import models  from "./database/models";
import {getAccessTokenFromRequestHeaders, getUserFromAuthToken} from "./utils/auth";
import schemaDirectives from "./graphiql/directives";
import * as services from "./services";
import accessLogStream from "./utils/logger";
const { NODE_ENV, PORT = 3000} = process.env;

const app = express();


// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(urlencoded({extended: true}));

// Parse application/json
app.use(json());


const server = new ApolloServer({
    typeDefs: graphqlSchema,
    resolvers,
    schemaDirectives,
    formatError: error => {
      
      return {
        message: error.message,
        state: error.originalError,
        locations: error.locations,
        path: error.path,
      }
    },
    context: async({req})=>{
        const token = getAccessTokenFromRequestHeaders(req);
        return {
          user: (token) ? getUserFromAuthToken(token) : token,
          ...services
        };
    },
    introspection: false,
    playground: (NODE_ENV === "development") ? true : false,
    validationRules: [depthLimit(5)]
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

