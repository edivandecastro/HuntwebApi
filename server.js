const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

mongoose.set('useCreateIndex', true);

config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

//mongoose.connect('mongodb://localhost:27017/huntweb', config);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-hfiub.mongodb.net/huntweb?retryWrites=true&w=majority', config);

requireDir('./src/models');

app.use(express.json());
app.use(cors());
app.use('/api', require("./src/routes"));

app.listen(3001);
