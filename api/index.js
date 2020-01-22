const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extend: false }));

// Define Routes
app.use('/', require('./routes/root'));
app.use('/user', require('./routes/user'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running and Listening at Port ${PORT}`));