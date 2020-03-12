const express = require('express');
const connectDB = require('./config/db');

const app = express();

//const users =require('./routes/api/users')
//const auth =require('./routes/api/auth')
//const profile =require('./routes/api/profile')

//connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on ${PORT}'));
