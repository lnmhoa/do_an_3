const userRouters = require('./UserRouters');
const productRouters = require('./ProductRouters');
const brandRouters = require('./BrandRouters');
const typeRouters = require('./TypeRouters');

const routers = (app) => {
    app.use('/api/user/', userRouters),
        app.use('/api/product/', productRouters),
        app.use('/api/brand/', brandRouters),
        app.use('/api/type/', typeRouters);
};

module.exports = routers;
