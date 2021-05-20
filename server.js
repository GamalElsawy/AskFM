const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const databaseConnection = require('./ENV/database.js');
dotenv.config({ path: './ENV/environment.env' });
databaseConnection();

app.listen(process.env.PORT, () => {
  console.log(
    `ASK.FM server is running successfully on port #${process.env.PORT}`.magenta
      .bold.underline
  );
});
