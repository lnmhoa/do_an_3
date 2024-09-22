import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import OrderPage from '../pages/ProfilePage/OrderPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';
import { DefaultLayout } from '../components/Layout';
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
        path: '/shopping-cart',
        page: ShoppingCartPage,
        title: 'Giỏ hàng',
        layout: DefaultLayout,
    },

    {
        path: '/order',
        page: OrderPage,
        title: 'Đơn hàng của tôi',
        layout: DefaultLayout,
    },

    {
        path: '/admin',
        page: AdminPage,
        title: 'Trang quản trị',
        layout: null,
    },
];
