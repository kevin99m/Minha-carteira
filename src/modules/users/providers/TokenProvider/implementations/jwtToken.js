const { sign } = require('jsonwebtoken');

class jwtToken {
  async genarate(userId) {
    const token = sign({}, process.env.KEY_SECRET_TOKEN, {
      subject: String(userId),
      expiresIn: process.env.EXPIRES_IN_TOKEN,
    });

    return token;
  }
}

module.exports = jwtToken;
