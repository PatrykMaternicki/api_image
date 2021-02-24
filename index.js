const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const provider = require('./providers')(app)
app.use(cors())

provider.load()
require('./routing')(app)
app.listen(port);