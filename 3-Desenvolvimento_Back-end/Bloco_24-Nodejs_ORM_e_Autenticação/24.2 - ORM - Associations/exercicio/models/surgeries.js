/** @type {import('sequelize').ModelAttributes} */
const Surgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgery_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    specialty: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    doctor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscore: true,
  });

  return Surgeries;
}

module.exports = Surgeries;