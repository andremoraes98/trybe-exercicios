const Patients = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    full_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'plans',
        key: 'plan_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    timestamps: false,
    tableName: 'Patients',
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.plans, { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patients;
}

module.exports = Patients;