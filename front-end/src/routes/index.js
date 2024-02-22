import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import DetailProductPage from "../pages/DetailProduct/DetailProduct";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowLayout : true
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowLayout : true
    },
    {
        path: '/detail-product',
        page: DetailProductPage,
        isShowLayout : true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]

