import HomePage from '../pages/HomePage/HomePage';
import DetailProductPage from '../pages/DetailProduct/DetailProduct';
import ListAccessoryPage from '../pages/ListProductPage/ListAccessoryPage/ListAccessoryPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Comparepage from '../pages/CompareProduct/CompareProduct';
import OrderDetail from '../pages/ProfilePage/OrderDetail/OrderDetail';
import Order from '../pages/ProfilePage/OrderPage/OrderPage';
import Evaluate from '../pages/ProfilePage/EvaluatePage/EvaluatePage';
import ControllerPage from '../pages/ProfilePage/ControllerPage/ControllerPage';
import FavoriteProduct from '../pages/ProfilePage/FavoriteProductPage/FavoriteProductPage';
import InfoUserPage from '../pages/ProfilePage/InfoUserPage/InfoUserPage';
import CartPage from '../pages/CartPage/CartPage.jsx';
import Introduce from '../pages/Introduce/Introduce.jsx';
import AdminPage from '../pages/AdminPage/AdminPage.jsx';
import InfoUserAdmin from '../pages/InfoUserAdmin/InfoUserAdmin.jsx';
import OrderAdmin from '../pages/OrderAdmin/OrderAdmin.jsx';
import ProductAdmin from '../pages/ProductAdmin/ProductAdmin.jsx';
import RegisPage from '../pages/RegisPage/RegisPage.jsx';
import DetailProductAdmin from '../pages/DetailProductAdmin/DetailProductAdmin.jsx';
import { DefaultLayout, OnlyHeaderTopLayout } from '../components/Layout';
export const routes = [
    {
        path: '/admin',
        page: AdminPage,
        title: 'Quản trị viên',
        layout: null,
    },
    {
        path: '/admin/detail-product/:id',
        page: DetailProductAdmin,
        title: 'Quản trị viên',
        layout: null,
    },
    {
        path: '/admin/info-user',
        page: InfoUserAdmin,
        title: 'Quản lý người dùng',
        layout: null,
    },
    {
        path: '/admin/order',
        page: OrderAdmin,
        title: 'Quản lý đơn hàng',
        layout: null,
    },
    {
        path: '/admin/product',
        page: ProductAdmin,
        title: 'Quản lí sản phẩm',
        layout: null,
    },
    {
        path: '/',
        page: HomePage,
        title: 'Trang chủ',
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        page: ControllerPage,
        title: 'ProfilePage',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/login',
        page: LoginPage,
        title: 'Đăng Nhập',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/signup',
        page: RegisPage,
        title: 'Đăng Kí',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/detail-product/:name',
        page: DetailProductPage,
        title: 'Chi tiết sản phẩm',
        layout: DefaultLayout,
    },
    {
        path: '/list-accessory',
        page: ListAccessoryPage,
        title: 'Danh sách phụ kiện',
        layout: DefaultLayout,
    },
    {
        path: '/cart',
        page: CartPage,
        title: 'Giỏ hàng của bạn',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/compare-product',
        page: Comparepage,
        title: 'So sánh sản phẩm',
        layout: DefaultLayout,
    },
    {
        path: '/profile/order/order-detail',
        page: OrderDetail,
        title: 'Chi tiết đơn hàng',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/profile/order',
        page: Order,
        title: 'Đơn hàng của bạn',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/profile/info-user',
        page: InfoUserPage,
        title: 'Thông tin người dùng',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/profile/favorite-product',
        page: FavoriteProduct,
        title: 'Sản phẩm yêu thích',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/profile/evaluate',
        page: Evaluate,
        title: 'Quản lí đánh giá',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '/introduce',
        page: Introduce,
        title: 'Giới thiệu',
        layout: OnlyHeaderTopLayout,
    },
    {
        path: '*',
        page: NotFoundPage,
        title: 'NotFoundPage',
        layout: null,
    },
];
