module.exports = (sequelize, DataTypes)=>{
  const Movie_Director = sequelize.define('Movie_Director', {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references:{
        model: 'Movie',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-movie-per-director'
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
      unique: 'unique-movie-per-director'
    }

  }, {});
  Movie_Director.associate = function(models) {
    // associations can be defined here
    Movie_Director.belongsTo(models.Movie,{foreignKey: 'movieId', targetKey: 'id', as: 'movie'});
    Movie_Director.belongsTo(models.Person,{foreignKey: 'personId', targetKey: 'id', as: 'director'});
  };
  return Movie_Director;
};

//module.exports = MovieDirectorModel;