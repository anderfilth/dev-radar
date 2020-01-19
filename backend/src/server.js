require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

require('./database');

const app = express();
const server = http.Server(app);
setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
