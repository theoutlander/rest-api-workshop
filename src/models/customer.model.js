let mongoose = require('mongoose')

const server = 'ds221609.mlab.com'
const port = '27017'
const database = 'rest-api-workshop'
const user = 'theoutlander'
const password = 'fZsMGZXQMx8FCTgkBwgFtEvwD7ML'

mongoose.connect(`mongodb://${user}:${passwd}@${server}:${port}/${db}`, {'useNewUrlParser': true, 'useUnifiedTopology':true})
mongoose.set('useCreateIndex', true)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
