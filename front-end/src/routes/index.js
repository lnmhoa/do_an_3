import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DetailProductPage from '../pages/DetailProduct/DetailProduct';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowLayout: true,
        title: 'Trang chủ',
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowLayout: true,
        title: 'ProfilePage',
    },
    {
        path: '/detail-product',
        page: DetailProductPage,
        isShowLayout: true,
        title: 'Chi tiết sản phẩm',
    },
    {
        path: '*',
        page: NotFoundPage,
        title: 'NotFoundPage'
    },
];
