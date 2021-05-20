const mongoose = require('mongoose');

const databaseConnection = async function () {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(
    `MongoDB is connencting with host: ${connection.connection.host}`.blue.bold
      .underline
  );
};

module.exports = databaseConnection;
