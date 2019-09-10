module.exports = (sequelize, DataTypes)=>{
  const Movie = sequelize.define('Movie', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Person, {through: 'Movie_Director', foreignKey: 'movieId', as: 'directors'});
    Movie.belongsToMany(models.Person, {through: 'Movie_Actor', foreignKey: 'movieId', as: 'actors'});
  };
  return Movie;
};

//module.exports = MovieModel;