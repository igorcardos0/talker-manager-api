const validationLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  if (!emailRegex.test(email)) {
    return res.status(400)
      .send({ message: 'O "email" deve ter o formato "email@email.com"' }); 
  }
  if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res.status(400)
      .send({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }
  next();
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  
  next();
};

module.exports = {
  validationLogin,
  validateToken,
};