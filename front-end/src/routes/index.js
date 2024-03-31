import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DetailProductPage from '../pages/DetailProduct/DetailProduct';
import ListAccessoryPage from '../pages/ListProductPage/ListAccessoryPage/ListAccessoryPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Comparepage from '../pages/CompareProduct/CompareProduct';

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
        path: '/login',
        page: LoginPage,
        isShowLayout: true,
        title: 'Đăng Nhập',
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowLayout: true,
        title: 'Đăng Kí Tài Khoản',
    },
    {
        path: '/detail-product/:name',
        page: DetailProductPage,
        isShowLayout: true,
        title: 'Chi tiết sản phẩm',
    },
    {
        path: '/list-accessory',
        page: ListAccessoryPage,
        isShowLayout: true,
        title: 'Danh sách phụ kiện',
    },
    {
        path: '/compare-product',
        page: Comparepage,
        isShowLayout: true,
        title: 'So sánh sản phẩm',
    },
    {
        path: '*',
        page: NotFoundPage,
        title: 'NotFoundPage',
    },
];
