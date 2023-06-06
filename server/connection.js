
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

exports.Connection = async (username, password) => {
  const URL = process.env.conn;
  try {
    await mongoose.connect(URL);

    console.log('db connected succesfully');
  } catch (error) {
    console.log('db error', error);
  }
};
app.listen(config.port, () => {
    console.log(`Server running on port ${port}`);
  });
  