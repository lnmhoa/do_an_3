import userRouters from './userRouters.js'
import productRouters from './productRouters.js'
import brandRouters from './brandRouters.js'
import typeRouters from './typeRouters.js'

const routers = (app) => {
    app.use('/api/user/', userRouters),
        app.use('/api/product/', productRouters),
        app.use('/api/brand/', brandRouters),
        app.use('/api/type/', typeRouters);
};

export default routers;
