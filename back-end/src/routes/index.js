const userRouters = require('./UserRouters');
const productRouters = require('./ProductRouters');

const routers = (app) => {
    app.use('/api/user/', userRouters), app.use('/api/product/', productRouters);
};

module.exports = routers;
