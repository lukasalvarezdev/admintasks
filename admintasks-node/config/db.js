const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('Database running correctly');
  } catch (error) {
    console.log(error);
    // If error, stop app
    process.exit(1);
  }
}

module.exports = connectDB;