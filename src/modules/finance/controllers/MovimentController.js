const MovimentRegister = require('../service/MovimentRegister');
const MovimentListByUser = require('../service/MovimentListByUser');
const MovimentShow = require('../service/MovimentShow');
const MovimentRemove = require('../service/MovimentRemove');
const FinanceRepository = require('../repositories/FinanceRepository');

class MovimentController {
  async create(req, res) {
    const { title, type, date, frequency, amount, description } = req.body;

    if (!title) return res.json({ error: 'title is missing' });
    if (!type) return res.json({ error: 'type is missing' });
    if (!date) return res.json({ error: 'date is missing' });
    if (!frequency) return res.json({ error: 'frequency is missing' });
    if (!amount) return res.json({ error: 'amount is missing' });
    if (!description) return res.json({ error: 'description is missing' });

    const financeRepository = new FinanceRepository();
    const movimentRegister = new MovimentRegister(financeRepository);
    const finance = await movimentRegister.execute({
      ...req.body,
      user_id: req.user.id.sub,
    });

    return res.json(finance);
  }

  async index(req, res) {
    const financeRepository = new FinanceRepository();
    const movimentListByUser = new MovimentListByUser(financeRepository);

    const user_id = req.user.id.sub;
    const { type, frequency } = req.query;

    const finance = await movimentListByUser.execute(user_id, type, frequency);

    res.json(finance);
  }

  async show(req, res) {
    const financeRepository = new FinanceRepository();
    const movimentShow = new MovimentShow(financeRepository);

    const user_id = req.user.id.sub;
    const moviment_id = req.params.id;

    const finance = await movimentShow.execute(user_id, moviment_id);

    res.json(finance);
  }

  async delete(req, res) {
    const financeRepository = new FinanceRepository();
    const movimentRemove = new MovimentRemove(financeRepository);

    const user_id = req.user.id.sub;
    const moviment_id = req.params.id;

    const finance = await movimentRemove.execute(user_id, moviment_id);

    return res.json(finance);
  }
  
  
}
const MovimentRemove = require('../services/MovimentRemove');
module.exports = new MovimentController();
const financeRepository = new FinanceRepository();
    const movimentRemove = new MovimentRemove(financeRepository);

    const user_id = req.user.id.sub;
    const moviment_id = req.params.id;

    const finance = await movimentRemove.execute(user_id, moviment_id);

    // if (!finance) return res.json({ error: 'Error when deleting moviment' });

    return res.json(finance);
