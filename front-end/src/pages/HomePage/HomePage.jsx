import { useEffect } from 'react';
import SliderBanner from '../../components/Slider/Slider';
import CategorySlide from '../../components/CategorySlide/CategorySlide';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import Feature from '../../components/Feature/Feature';
import BestSellingProduct from '../../components/BestSelling/BestSellingProduct';

const ImageSlideItem = [
    {
        name: 'https://thuvienmuasam.com/uploads/default/original/2X/c/c74fccba6a18e52ef256c4379bdcde15c9e05465.jpeg',
        path: '/',
    },
    {
        name: 'https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai-dep_103211368.jpg',
        path: '/',
    },
    {
        name: 'https://ngocthanhmobile.com/uploads/2021/12/baiviet-big-sale-cuoi-nam-co-mot-khong-hai.png',
        path: '/',
    },
];

function HomePage() {
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);
    return (
        <>
            <>
                <SliderBanner arrayItem={ImageSlideItem} />
            </>
            <>
                <CategorySlide />
            </>
            <>
                <SaleProduct />
            </>
            <>
                <BestSellingProduct />
            </>

            <>
                <Feature />
            </>
        </>
    );
}

export default HomePage;
