const MovimentRegister = require('./MovimentRegister');
const FinanceRepositoryFake = require('../repositories/FinanceRepositoryFake');

describe('MovimentRegister', () => {
  test('should be able register new finance moviment', async () => {
    const data = {
      title: 'Café',
      type: 'saída',
      date: '13/11/2020',
      frequency: 'Recorrente',
      amount: 8.6,
      description: 'Comprar café urgente',
    };

    const financeRepositoryFake = new FinanceRepositoryFake();
    const movimentRegister = new MovimentRegister(financeRepositoryFake);
    const finance = await movimentRegister.execute(data);

    expect(finance).toHaveProperty('id');
  });
});
