const { Router } = require('express');
const movimentController = require('../../../modules/finance/controllers/MovimentController');
const authenticatted = require('../middlewares/authenticatted');

const financeRoutes = Router();

financeRoutes.post('/moviment', authenticatted, movimentController.create);
financeRoutes.get('/moviment', authenticatted, movimentController.index);
financeRoutes.get('/moviment/:id', authenticatted, movimentController.show);
financeRoutes.delete(
  '/moviment/:id',
  authenticatted,
  movimentController.delete,
);

module.exports = financeRoutes;
