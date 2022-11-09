require('dotenv/config');


const port = process.env.API_PORT;
const api = require('./api');

api.listen(port);
console.log(`Api rodando na porta ${port}`);
