const mongoose = require('mongoose')
const databaseUrl =
  'mongodb+srv://KaNa:y3waq2ea@cluster0.hr9db1u.mongodb.net/?retryWrites=true&w=majority'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
