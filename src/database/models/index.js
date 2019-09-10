const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url,config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
};


// setting the list of used models
const models = [
  require('./country')(sequelize, Sequelize),
  require('./movie_actor')(sequelize, Sequelize),
  require('./movie_director')(sequelize, Sequelize),
  require('./movie')(sequelize, Sequelize),
  require('./person')(sequelize, Sequelize),
  require('./user')(sequelize, Sequelize)
];

models.forEach(model => {
  db[model.name] = model;
});

models.forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// scripts
//Create new migration without model -> node_modules/.bin/sequelize migration:generate --name update-person
//Run all migrations -> node_modules/.bin/sequelize db:migrate all
//Create Seed database -> node_modules/.bin/sequelize seed:generate --name Country
//Seed All database -> node_modules/.bin/sequelize db:seed:all
