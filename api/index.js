const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extend: false }));

// Define Routes
app.use('/', require('./routes/root'));
app.use('/user', require('./routes/user'));
app.use('/node_data', require('./routes/node_data'));

const PORT = 7988;

app.listen(PORT, () => console.log(`AgroSmart Server Running and Listening at Port ${PORT}`));