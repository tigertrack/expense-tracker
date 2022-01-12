const router = require('express').Router();
const {models, connectDB} = require('../model')
const passport = require('passport');

router.post('/register', async(req, res, next) => {
  try {
    await models.User.create({email, password, username} = req.body)
    res.status(200).end()

  } catch (error) {
    res.json(error)
  }
})

module.exports = router