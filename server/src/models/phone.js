const phone = (sequelize, DataTypes) => {
  const Phone = sequelize.define(
    "Phone",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      operatingSystem: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      screen: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      screenResolutionHeight: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      screenResolutionWidth: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      ram: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      memory: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      camera: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      mah: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      sim: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
      },
      imgSrc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Phone;
};

export default phone;
