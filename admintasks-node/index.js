const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Create server
const app = express();

connectDB();

app.use( cors() );

// Enable express.json
app.use( express.json({ extended: true }) );

const port = process.env.PORT || 4000;

// Import routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// Start app or server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at port ${port}`);
});