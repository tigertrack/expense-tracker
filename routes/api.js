var router = require('express').Router();
const expenseRouter = require('./expense')
const authRouter = require('./authentication')
router.use('/expense', expenseRouter);
router.use('/auth', authRouter);

module.exports = router;
