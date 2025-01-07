const writeTalkerNameValidation = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) return res.status(400).send({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400)
      .send({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }
  next();
};

const writeTalkerAgeValidation = (req, res, next) => {
  const { age } = req.body;
    
  if (!age) return res.status(400).send({ message: 'O campo "age" é obrigatório' });
  if (!Number.isInteger(age) || age < 18) {
    return res.status(400)
      .send({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' }); 
  }
  next();
};

const writeTalkerTalkValidation = (req, res, next) => {
  const { talk } = req.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      
  if (!talk) return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
  if (!talk.watchedAt) {
    return res.status(400)
      .send({ message: 'O campo "watchedAt" é obrigatório' }); 
  }
  if (!regex.test(talk.watchedAt)) {
    return res.status(400)
      .send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
  }
  next();
};

// const writeTalkerRateValidation = (req, res, next) => {
//   const { talk } = req.body;
//   const rateNumber = Number.isInteger(talk.rate);
//   const talkRateNumber = talk.rate;
        
//   if (!talk) return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
//   if (talkRateNumber === undefined) {
//     return res.status(400)
//       .send({ message: 'O campo "rate" é obrigatório' }); 
//   }
//   if (!rateNumber || talkRateNumber > 5 || talkRateNumber < 1) {
//     return res.status(400)
//       .send({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' }); 
//   }
//   next();
// };
const checkTalkExists = (talk) => {
  if (!talk) {
    return { message: 'O campo "talk" é obrigatório', statusCode: 400 };
  }
  return null;
};
  
const checkRateExists = (rate) => {
  if (rate === undefined) {
    return { message: 'O campo "rate" é obrigatório', statusCode: 400 };
  }
  return null;
};
  
const checkRateIsValid = (rate) => {
  const rateNumber = Number.isInteger(rate);
  if (!rateNumber || rate > 5 || rate < 1) {
    return { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5', statusCode: 400 };
  }
  return null;
};
  
const writeTalkerRateValidation = (req, res, next) => {
  const { talk } = req.body;
  
  const talkError = checkTalkExists(talk);
  if (talkError) return res.status(talkError.statusCode).send({ message: talkError.message });
  
  const rateError = checkRateExists(talk.rate);
  if (rateError) return res.status(rateError.statusCode).send({ message: rateError.message });
  
  const rateValidationError = checkRateIsValid(talk.rate);
  if (rateValidationError) {
    return res.status(rateValidationError.statusCode)
      .send({ message: rateValidationError.message });
  }
  
  next();
};
  
module.exports = writeTalkerRateValidation;

module.exports = {
  writeTalkerAgeValidation,
  writeTalkerNameValidation,
  writeTalkerRateValidation,
  writeTalkerTalkValidation,
};