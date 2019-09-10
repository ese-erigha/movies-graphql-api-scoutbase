const {hash} =  require("bcrypt");

module.exports = (sequelize, DataTypes)=>{
  const User = sequelize.define('User', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});

  User.beforeCreate( user => {
    const saltRounds = 10;
    return hash(user.password,saltRounds)
              .then(hashedPassword => user.password = hashedPassword);

  });

  return User;
};
