const { readTalkerData, writeNewTalker,
  updateTalkerData, deleteTalkerData } = require('../utils/fsUtils');

const getDataTalker = async (req, res) => {
  const talkerData = await readTalkerData();
  console.log(talkerData);
  
  res.status(200).json(talkerData);
};

const getDataTalkerId = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const talkerData = await readTalkerData();
  const talkerFound = talkerData.find((talker) => talker.id === Number(id));
  //   console.log(talkerData);
  if (!talkerFound) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    
  res.status(200).json(talkerFound);
};

const writeTalker = async (req, res) => {
//   console.log(req.body);
  const newTalker = req.body;
  const newTalkerWithId = await writeNewTalker(newTalker);
  return res.status(201).json(newTalkerWithId);
};

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const updatedTalkerData = req.body;
  const updatedTalker = await updateTalkerData(Number(id), updatedTalkerData);
  if (!updatedTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(updatedTalker);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  await deleteTalkerData(Number(id));
  return res.status(204).end();
};

const searchTalkers = async (req, res) => {
  const { q } = req.query;
  const talkers = await readTalkerData();
  if (!q) {
    return res.status(200).json(talkers);
  }
  const filteredTalkers = talkers.filter((talker) =>
    talker.name.toLowerCase().includes(q.toLowerCase()));
  return res.status(200).json(filteredTalkers);
};

module.exports = {
  getDataTalker,
  getDataTalkerId,
  writeTalker,
  updateTalker,
  deleteTalker,
  searchTalkers,
};