const { readTalkerData } = require('../utils/fsUtils');

const updateIdValidation = async (req, res, next) => {
  const { id } = req.params;
  const talkers = await readTalkerData();
  const talkerFound = talkers.find((talker) => talker.id === Number(id));
  if (!id) return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  if (!talkerFound) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = {
  updateIdValidation,
};