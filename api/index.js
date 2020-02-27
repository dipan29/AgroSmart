const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express();
app.use(cors()); //For Cross Origin

//Connect to Database
connectDB();

app.use(express.json({ extend: false }));

// Define Routes
app.use('/', require('./routes/root'));
app.use('/update', require('./routes/update_server'));
app.use('/cron', require('./routes/cron_server'));
app.use('/user', require('./routes/user'));
app.use('/node_data', require('./routes/node_data'));
app.use('/property', require('./routes/property'));
app.use('/controller', require('./routes/controller'));
app.use('/graphs', require('./routes/graphs'));

const PORT = 7988;

app.listen(PORT, () => console.log(`AgroSmart Server Running and Listening at Port ${PORT}`));