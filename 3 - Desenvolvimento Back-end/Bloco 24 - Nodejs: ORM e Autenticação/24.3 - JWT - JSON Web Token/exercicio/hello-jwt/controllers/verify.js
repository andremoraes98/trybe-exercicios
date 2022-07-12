const jwt = require('jsonwebtoken');

const secret = 'secret';

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const [_Bearer, token] = authorization.replaceAll('"', '').split(' ');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const { data } = jwt.verify(token, secret);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};