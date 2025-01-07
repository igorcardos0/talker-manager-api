const express = require('express');
const { getDataTalker, getDataTalkerId,
  writeTalker, updateTalker, 
  deleteTalker, 
  searchTalkers } = require('../controls/talkerControls');
const { validateToken } = require('../middlewares/login.middlewares');
const { writeTalkerAgeValidation, writeTalkerRateValidation,
  writeTalkerNameValidation,
  writeTalkerTalkValidation } = require('../middlewares/writeTalker.middlewares');
const { updateIdValidation } = require('../middlewares/update.middlewares');

const router = express.Router();
router.get('/', getDataTalker);
router.get('/search', validateToken, searchTalkers);
router.get('/:id', getDataTalkerId);
router.post('/', validateToken, writeTalkerNameValidation, writeTalkerAgeValidation,
  writeTalkerTalkValidation, writeTalkerRateValidation, writeTalker);
router.put('/:id', validateToken, writeTalkerNameValidation, writeTalkerAgeValidation,
  writeTalkerTalkValidation, writeTalkerRateValidation, updateIdValidation, updateTalker);
router.delete('/:id', validateToken, deleteTalker);

module.exports = router;