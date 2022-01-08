var router = require('express').Router();
const expenseRouter = require('./expense')
router.use('/expense', expenseRouter);

module.exports = router;
