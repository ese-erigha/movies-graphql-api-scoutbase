require('dotenv').config();
const {DEV_DATABASE_URL,PROD_DATABASE_URL} = process.env;

module.exports = {
  "development": {
    "url":`${DEV_DATABASE_URL}`, 
    "dialect": "postgres"
  },
  "test": {
    "url": `${DEV_DATABASE_URL}`,
    "dialect": "postgres"
  },
  "production": {
    "url":`${PROD_DATABASE_URL}`,
    "dialect": "postgres"
  }
}
