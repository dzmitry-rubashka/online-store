"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Phone", {
      id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      operatingSystem: {
        type: STRING,
        allowNull: false,
        unique: false,
      },
      screen: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      screenResolutionHeight: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      screenResolutionWidth: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      ram: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      memory: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      camera: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      mah: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      sim: {
        type: NUMBER,
        allowNull: false,
        unique: false,
      },
      imgSrc: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: DATE,
        allowNull: false,
      },
      updated_at: {
        type: DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Phone");
  },
};
