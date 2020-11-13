const { verify } = require('jsonwebtoken');

function authenticatted(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.json({ error: 'JWT token is missing' });

  try {
    const [, token] = authHeader.split(' ');
    const decoded = verify(token, process.env.KEY_SECRET_TOKEN);

    req.user = {
      id: decoded,
    };
  } catch {
    return res.json({ error: 'invalid token' });
  }

  return next();
}

module.exports = authenticatted;
