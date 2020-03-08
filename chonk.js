const express = require('express');
const connectDB = require('./config/db');
const path = require("path");

const app = express();

// Connect to database
connectDB();

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