const crypto = require('crypto');

const createToken = (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
};

module.exports = {
  createToken,
};