require('dotenv/config');
const middlewareError = require('../middlewares/error.middleware');
const { userRoutes, projectRoutes, loginRoutes } = require('../routes');

const port = process.env.API_PORT;

const api = require('./api');

api.use(userRoutes, projectRoutes, loginRoutes);

api.use(middlewareError);

api.listen(port);
console.log(`Api rodando na porta ${port}`);
