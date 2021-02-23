const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const provider = require('./providers')(app)

provider.load()
require('./routing')(app)
app.listen(port);