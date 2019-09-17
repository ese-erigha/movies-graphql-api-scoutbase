# movies-graphql-api-scoutbase
GraphQl API showing relationships between Movies, Actors and Directors.

## Getting Started

### Prerequisites
Install [Node](https://nodejs.org/en/download/)

### Installing
Clone the repository
```
git clone https://github.com/gitese/movies-graphql-api-scoutbase.git
```

Install dependencies
```
npm install
```

### Setup Database
Install [PostgreSQL](http://www.postgresqltutorial.com/install-postgresql/)

Configure Database
```
Create a .env file in the application root
```

Add the following config to the .env file
```
NODE_ENV=<environment>
PORT=<port>
TOKEN_SECRET_KEY=<secret>  //for JWT purpose
TOKEN_EXPIRATION=365 days //for JWT purpose
DEV_DATABASE_URL=postgres://postgres:<password>@<host>:<port>/<database-name>
PROD_DATABASE_URL=postgres://postgres:<password>@<host>:<port>/<database-name>
```

### Running application

Development Environment
```
npm run start:dev
```

Production Environment
```
npm run build

npm run run:prod
```

### Running Tests
Unit and Integration Tests
```
npm run test
```

Coverage Test
```
npm run coverage
```

## Built With
* [Webpack](https://github.com/webpack/webpack)
* [Express](https://github.com/expressjs/express)
* [Apollo Graphql](https://github.com/apollographql/apollo-server)
* [Dataloader](https://github.com/graphql/dataloader)
* [Sequelize](https://github.com/sequelize/sequelize)
* [PostgreSQL](https://github.com/brianc/node-postgres)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



