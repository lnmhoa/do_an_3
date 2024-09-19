import userRouters from './UserRouters'
import productRouters from './ProductRouters'
import brandRouters from './BrandRouters'
import typeRouters from './TypeRouters'

const routers = (app) => {
    app.use('/api/user/', userRouters),
        app.use('/api/product/', productRouters),
        app.use('/api/brand/', brandRouters),
        app.use('/api/type/', typeRouters);
};

export default routers;
