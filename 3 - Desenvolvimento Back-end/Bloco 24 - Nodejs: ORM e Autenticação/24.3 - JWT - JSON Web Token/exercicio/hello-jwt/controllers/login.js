const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = 'secret';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  try {
    const schema = Joi.object({
      user: Joi.string().alphanum().min(5).required(),
      password: Joi.string().min(5).required(),
    });
    const { user, password } = await schema.validateAsync(req.body);

    const data = {
      user,
      admin: user === 'admin' && password === 's3nh4S3gur4???',
    };

    const token = jwt.sign({ data }, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};