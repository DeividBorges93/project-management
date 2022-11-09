require('express-async-errors');
const express = require('express');
const cors = require('cors');

const api = express();

api.use(express.json());
api.use(cors());

module.exports = api;
