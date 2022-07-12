'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientsTable = queryInterface.createTable('Patients', {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'plans',
          key: 'plan_id',
        },
      },
    });

    return PatientsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Patients'),
};
