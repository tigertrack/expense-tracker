var express = require('express');
var router = express.Router();
const {models, connectDB} = require('../model')
router.get('/', async (req, res) => {
  let expenses = await models.Expense.find({})
  res.json(expenses)
})
router.post('/', async (req, res) => {
  try {
    let expense = await models.Expense.create(req.body)
    res.json(expense)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
});

module.exports = router;
