module.exports = (sequelize, DataTypes)=>{
//const PersonModel =  function(sequelize, DataTypes){
  const Person = sequelize.define('Person', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    birthday: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    countryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
    Person.belongsTo(models.Country,{foreignKey: 'countryId',as: 'country'});
    Person.belongsToMany(models.Movie, {through: 'Movie_Director', foreignKey: 'personId',  as: 'directedMovies'});
    Person.belongsToMany(models.Movie, {through: 'Movie_Actor', foreignKey: 'personId', as: 'featuredMovies'});
  };
  return Person;
};


//module.exports = PersonModel;