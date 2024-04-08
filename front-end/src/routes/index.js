import HomePage from '../pages/HomePage/HomePage';
// import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DetailProductPage from '../pages/DetailProduct/DetailProduct';
import ListAccessoryPage from '../pages/ListProductPage/ListAccessoryPage/ListAccessoryPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Comparepage from '../pages/CompareProduct/CompareProduct';
import OrderDetail from '../pages/ProfilePage/OrderDetail/OrderDetail';
import Order from '../pages/ProfilePage/OrderPage/OrderPage';
import Evaluate from '../pages/ProfilePage/EvaluatePage/EvaluatePage';
import ControllerPage from '../pages/ProfilePage/ControllerPage/ControllerPage';
import FavoriteProduct from '../pages/ProfilePage/FavoriteProductPage/FavoriteProductPage';
import InfoUserPage from '../pages/ProfilePage/InfoUserPage/InfoUserPage';
import CartPage from '../pages/CartPage/CartPage.jsx';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowLayout: true,
        title: 'Trang chủ',
    },
    {
        path: '/profile',
        page: ControllerPage,
        isShowLayout: true,
        isShowFooter: false,
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
        path: '/cart',
        page: CartPage,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Giỏ hàng của bạn',
    },
    {
        path: '/compare-product',
        page: Comparepage,
        isShowLayout: true,
        title: 'So sánh sản phẩm',
    },
    {
        path: '/profile/order/order-detail',
        page: OrderDetail,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Chi tiết đơn hàng',
    },
    {
        path: '/profile/order',
        page: Order,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Đơn hàng của bạn',
    },
    {
        path: '/profile/info-user',
        page: InfoUserPage,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Thông tin người dùng',
    },
    {
        path: '/profile/favorite-product',
        page: FavoriteProduct,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Sản phẩm yêu thích',
    },
    {
        path: '/profile/evaluate',
        page: Evaluate,
        isShowLayout: true,
        isShowFooter: false,
        title: 'Quản lí đánh giá',
    },
    {
        path: '*',
        page: NotFoundPage,
        title: 'NotFoundPage',
    },
];
