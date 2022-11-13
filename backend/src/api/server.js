require('dotenv/config');
const middlewareError = require ('../middlewares/error.middleware');

const port = process.env.API_PORT;

const api = require('./api');

api.use(middlewareError);

api.listen(port);
console.log(`Api rodando na porta ${port}`);
