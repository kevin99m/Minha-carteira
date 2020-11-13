class jwtTokenModel {
  async genarate(userId) {
    return `Baren token-${userId}`;
  }
}

module.exports = jwtTokenModel;
