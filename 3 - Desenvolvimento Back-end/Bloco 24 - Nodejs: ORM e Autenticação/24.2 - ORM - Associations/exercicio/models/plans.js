const plans = (sequelize, DataTypes) => {
  const plans = sequelize.define('plans', {
    plan_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    coverage: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: false,
    tableName: 'plans',
  });

  plans.associate = (models) => {
    plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'Patients'});
  }

  return plans;
}

module.exports = plans;