require('dotenv/config');
const middlewareError = require ('../middlewares/error.middleware');
const { userRoutes } = require('../routes');


const port = process.env.API_PORT;

const api = require('./api');

api.use(userRoutes);

api.use(middlewareError);

api.listen(port);
console.log(`Api rodando na porta ${port}`);
