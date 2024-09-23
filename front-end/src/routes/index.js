import HomePage from '../pages/HomePage/HomePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import { DefaultLayout } from '../components/Layout';
import OrderPage from '../pages/ProfilePage/OrderPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AddressPage from '../pages/ProfilePage/AddressPage';
import LoyalCustomersPage from '../pages/ProfilePage/LoyalCustomersPage';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';

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
        title: 'Đơn hàng',
        layout: DefaultLayout,
    },
    {
        path: '/loyal-customers',
        page: LoyalCustomersPage,
        title: 'Khách hàng thân thiết',
        layout: DefaultLayout,
    },
    {
        path: '/delivery-address',
        page: AddressPage,
        title: 'Địa chỉ nhận hàng',
        layout: DefaultLayout,
    },
    {
        path: '/admin',
        page: AdminPage,
        title: 'Trang quản trị',
        layout: null,
    },
];
