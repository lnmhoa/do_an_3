import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import CartPage from '../pages/CartPage/CartPage';
import { DefaultLayout, OnlyHeaderTopLayout } from '../components/Layout';
export const routes = [
    {
        path: '/',
        page: HomePage,
        title: 'Trang chủ',
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        page: ProfilePage,
        title: 'Hồ sơ người dùng',
        layout: DefaultLayout,
    },
    {
        path: '/cart',
        page: CartPage,
        title: 'Giỏ hàng',
        layout: DefaultLayout,
    },

    {
        path: '/admin',
        page: AdminPage,
        title: 'Trang quản trị',
        layout: null,
    },
];
