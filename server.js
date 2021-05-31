const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const databaseConnection = require('./ENV/database.js');
const posts = require('./routes/posts.js');
const comments = require('./routes/comments');

dotenv.config({ path: './ENV/environment.env' });
databaseConnection();

app.use(express.json());

// Mounts
app.use('/api/v1/posts', posts);
app.use('/api/v1/comments', comments);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `ASK.FM server is running successfully on port #${PORT}`.magenta.bold
      .underline
  );
});
