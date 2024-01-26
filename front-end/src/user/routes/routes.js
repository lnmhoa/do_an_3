import config from '../config';
import Home from '../pages/HomePage';
import Profile from '../pages/ProfilePage';
import DetailProduct from '../pages/DetailProductPage';
import NotFound from '~/pages/NotFoundPage';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.detailProduct, component: DetailProduct },
    { path: config.routes.NotFound, component: NotFound },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
