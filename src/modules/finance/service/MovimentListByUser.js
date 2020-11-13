class MovimentListByUser {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, type, frequency) {
    const moviments = await this.financeRepository.movimentByUser(
      user_id,
      type,
      frequency,
    );

    return moviments;
  }
}

module.exports = MovimentListByUser;
