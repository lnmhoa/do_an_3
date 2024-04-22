const userRouters = require('./UserRouters');
const productRouters = require('./ProductRouters');
const brandRouters = require('./BrandRouters');

const routers = (app) => {
    app.use('/api/user/', userRouters), app.use('/api/product/', productRouters), app.use('/api/brand/', brandRouters);
};

module.exports = routers;
