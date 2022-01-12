const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = new mongoose.Schema({
  username: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

schema.pre(
  'save',
  async function(next){
    const user = this
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
  }
)

module.exports = mongoose.model("User", schema)