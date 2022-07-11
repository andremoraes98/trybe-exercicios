const PatientsSurgeries = (sequelize, _DataTypes) => {
  const PatientsSurgeries = sequelize.define('Patient_surgeries',
  {},
  { timestamps: false });

  PatientsSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'Surgeries',
      through: PatientsSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });

    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientsSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientsSurgeries;
}

module.exports = PatientsSurgeries;