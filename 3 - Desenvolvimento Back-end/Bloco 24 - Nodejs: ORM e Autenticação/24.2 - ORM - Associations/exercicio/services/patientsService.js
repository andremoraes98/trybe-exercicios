const { Patients, plans, Surgeries } = require('../models');

const getAll = async () => {
  const patients = await Patients.findAll({
    include: [
      { model: plans, as: 'plan' },
      { model: Surgeries, as: 'Surgeries' }
    ],
    attributes: { exclude: ['plan_id']}
  });

  return patients;
};

module.exports = {
  getAll,
};
