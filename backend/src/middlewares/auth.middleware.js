const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const SECRET = process.env.JWT_SECRET;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(authorization, SECRET);

    req.tokenData = decoded.data;

    return next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    return next(error);
  }
};
