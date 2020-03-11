const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

// Connect to database
async () => await mongoose
  .connect(
    'mongodb://mongo:27017/chonk-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected...'))
  .then(err => console.error(err));

app.use(express.json({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Set static folder
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));