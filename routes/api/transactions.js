const express = require('express');
const querystring = require('querystring');
const router = express.Router();
const Transaction = require('../../models/Transaction');

router.get("/test", (req, res) => res.json({ message: "Transactions route"}));

router.get("/", (req, res) => {
  const { category, description, value } = req.query;

  const options = {};
  if (category) {
    options['category'] = category
  }
  if (description) {
    options['description'] = { $regex: '.*' + description + '.*' }
  }
  if (value) {
    options['value'] = value;
  }

  Transaction.find(options)
    .sort({ date: 'desc' })
    .then(transactions => res.json(transactions))
    .catch(err => {
      return res.status(404).json({ noTransactions: 'No transactions found' });
    });
});

router.post("/", (req, res) => {
  const { category, description, value } = req.body;

  const newTransaction = new Transaction({
    description,
    category,
    value,
  });

  newTransaction.save().then(transaction => res.json(transaction));
})

module.exports = router;