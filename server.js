const winston = require('winston');
const express = require('express');
const app = express();

const port = process.env.PORT || '3000';
app.listen(port);
console.log(`Backend is now listening on port: ${port}`);
