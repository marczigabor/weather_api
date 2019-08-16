module.exports = (sequelize, DataTypes) => {
    
    var City = sequelize.define('City', {
      name: DataTypes.STRING,
      country: DataTypes.STRING
    });

    City.associate = (models) => {
      City.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };    

    return City;
  };
  