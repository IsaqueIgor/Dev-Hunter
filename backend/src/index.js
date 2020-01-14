const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 4444;

const app = express();

mongoose.connect('mongodb+srv://usuario:usuario@cluster0-ehilu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});