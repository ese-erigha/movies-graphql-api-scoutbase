module.exports = (sequelize, DataTypes)=>{
  const Movie_Actor = sequelize.define('Movie_Actor', {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references:{
        model: 'Movie',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-movie-per-actor'
    },
    personId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references:{
        model: 'Person',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-movie-per-actor'
    }

  }, {});
  Movie_Actor.associate = function(models) {
    // associations can be defined here
    Movie_Actor.belongsTo(models.Movie,{foreignKey: 'movieId', targetKey: 'id', as: 'movie'});
    Movie_Actor.belongsTo(models.Person,{foreignKey: 'personId', targetKey: 'id', as: 'actor'});
  };
  return Movie_Actor;
};

//module.exports = MovieActorModel;