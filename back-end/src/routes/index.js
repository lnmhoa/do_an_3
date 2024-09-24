import userRouters from './UserRouters.js'
import productRouters from './ProductRouters.js'
import brandRouters from './BrandRouters.js'
import typeRouters from './TypeRouters.js'

const routers = (app) => {
    app.use('/api/user/', userRouters),
        app.use('/api/product/', productRouters),
        app.use('/api/brand/', brandRouters),
        app.use('/api/type/', typeRouters);
};

export default routers;
