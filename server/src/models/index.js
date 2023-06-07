import registerPhone from "./phone";

let models = {};

export const registerModels = (sequelize) => {
  models.Phone = registerPhone(sequelize);
  models.sequelize = sequelize;

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
};

export default models;
