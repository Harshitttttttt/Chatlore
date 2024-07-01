const mongoose = require("mongoose");
const colors = require("colors");

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit();
  }
};

module.exports = connectToDB;
