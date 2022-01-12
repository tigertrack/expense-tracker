const passport = require('passport')
var localStrategy = require('passport-local').Strategy
const {models} = require('../model')

module.exports = function(passport) {
  passport.use(
    'signup',
    new localStrategy(
      {

        passwordField: 'password',
        usernameField: 'username'
      },
      async (password, email, done) => {
        try {
          const user = await models.User.create({email, password})
          return done(null, user)
        } catch (error) {
          console.log(error)
          done(error)
        }
      }
    )
  )
}