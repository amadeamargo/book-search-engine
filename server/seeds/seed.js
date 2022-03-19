const db = require('../config/connection');
const { User, bookSchema } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  const books = await Book.insertMany(bookData)

  console.log('Data seeded!');
  process.exit(0);
});
