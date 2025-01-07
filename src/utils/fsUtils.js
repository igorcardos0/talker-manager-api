const fs = require('fs').promises;
const path = require('path');

const TALKER_FILE = path.resolve(__dirname, '../talker.json');

async function readTalkerData() {
  try {
    const data = await fs.readFile(TALKER_FILE, 'utf-8');
    const talkerData = JSON.parse(data);
    // console.log(talkerData);
    return talkerData;
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error}`);
    return [];
  }
}

const writeNewTalker = async (newTalker) => {
  try {
    const talkers = await readTalkerData();
    const newMissionWithId = { id: talkers.length + 1, ...newTalker };
    const allTalkers = JSON.stringify([...talkers, newMissionWithId], null, 2);
    await fs.writeFile(path.resolve(TALKER_FILE), allTalkers);
    // console.log(allTalkers);
    return newMissionWithId;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

const updateTalkerData = async (id, updatedTalkerData) => {
  const oldTalkers = await readTalkerData();
  const updatedTalker = { id, ...updatedTalkerData };
  const updatedTalkers = oldTalkers.reduce((talkerList, currentTalker) => {
    if (currentTalker.id === updatedTalker.id) return [...talkerList, updatedTalker];
    return [...talkerList, currentTalker];
  }, []);
  const updateData = JSON.stringify(updatedTalkers, null, 2);
  try {
    await fs.writeFile(TALKER_FILE, updateData);
    return updatedTalker;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

const deleteTalkerData = async (id) => {
  const oldTalkers = await readTalkerData();
  const deletedTalker = oldTalkers.filter((currentTalker) => currentTalker.id !== id);
  const attData = JSON.stringify(deletedTalker);
  try {
    await fs.writeFile(TALKER_FILE, attData);
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
};

// readTalkerData();

module.exports = {
  readTalkerData,
  writeNewTalker,
  updateTalkerData,
  deleteTalkerData,
};