import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DetailProductPage from '../pages/DetailProduct/DetailProduct';
import ListPhonePage from '../pages/ListProductPage/ListPhonePage/ListPhonePage';
import ListAccessoryPage from '../pages/ListProductPage/ListAccessoryPage/ListAccessoryPage';
import ListLaptopPage from '../pages/ListProductPage/ListLaptopPage/ListLaptopPage';
import ListSalePage from '../pages/ListProductPage/ListSalePage/ListSalePage';
import ListScreenPage from '../pages/ListProductPage/ListScreenPage/ListScreenPage';
import ListTabletPage from '../pages/ListProductPage/ListTabletPage/ListTabletPage';
import ListWatchPage from '../pages/ListProductPage/ListWatchPage/ListWatchPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

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
        path: '/detail-product',
        page: DetailProductPage,
        isShowLayout: true,
        title: 'Chi tiết sản phẩm',
    },
    {
        path: '/list-phone',
        page: ListPhonePage,
        isShowLayout: true,
        title: 'Danh sách điện thoại',
    },
    {
        path: '/list-accessory',
        page: ListAccessoryPage,
        isShowLayout: true,
        title: 'Danh sách phụ kiện',
    },
    {
        path: '/list-laptop',
        page: ListLaptopPage,
        isShowLayout: true,
        title: 'Danh sách laptop',
    },
    {
        path: '/list-sale',
        page: ListSalePage,
        isShowLayout: true,
        title: 'Danh sách giảm giá',
    },
    {
        path: '/list-screen',
        page: ListScreenPage,
        isShowLayout: true,
        title: 'Danh sách màn hình',
    },
    {
        path: '/list-tablet',
        page: ListTabletPage,
        isShowLayout: true,
        title: 'Danh sách máy tính bảng',
    },
    {
        path: '/list-watch',
        page: ListWatchPage,
        isShowLayout: true,
        title: 'Danh sách đồng hồ',
    },
    {
        path: '*',
        page: NotFoundPage,
        title: 'NotFoundPage',
    },
];
