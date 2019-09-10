module.exports = (sequelize, DataTypes)=>{
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.Person,{
      foreignKey: 'countryId',
      as: 'persons',
      onDelete: 'CASCADE'
    });
  };
  return Country;
};

//module.exports = CountryModel;