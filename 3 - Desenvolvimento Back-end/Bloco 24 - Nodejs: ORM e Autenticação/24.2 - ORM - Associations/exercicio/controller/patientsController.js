const PatientsServices = require('../services/patientsService');

const getAll = async (_req, res) => {
  const patients = await PatientsServices.getAll();

  return res.status(200).json(patients);
};

module.exports = {
  getAll,
};
