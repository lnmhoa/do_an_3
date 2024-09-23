import { useEffect } from 'react';
import SliderBanner from '../../components/Slider/Slider';
import CategorySlide from '../../components/CategorySlide/CategorySlide';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import Feature from '../../components/Feature/Feature';
import BestSellingProduct from '../../components/BestSelling/BestSellingProduct';

const fakeData = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        quantity: 1,
        price: 10000000,
        priceSale: 8000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 2,
        name: 'Samsung Galaxy Z Flip4',
        quantity: 1,
        price: 20000000,
        priceSale: 18000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 3,
        name: 'Xiaomi Mi 11',
        quantity: 1,
        price: 15000000,
        priceSale: 13000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 4,
        name: 'Google Pixel 7',
        quantity: 1,
        price: 12000000,
        priceSale: 11000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 5,
        name: 'OnePlus 10 Pro',
        quantity: 1,
        price: 17000000,
        priceSale: 16000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 6,
        name: 'Sony Xperia 1 IV',
        quantity: 1,
        price: 25000000,
        priceSale: 24000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 7,
        name: 'Oppo Find X5 Pro',
        quantity: 1,
        price: 22000000,
        priceSale: 21000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 8,
        name: 'Vivo X80 Pro',
        quantity: 1,
        price: 23000000,
        priceSale: 22000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 9,
        name: 'Nokia G50',
        quantity: 1,
        price: 9000000,
        priceSale: 8000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 10,
        name: 'Motorola Edge 20',
        quantity: 1,
        price: 13000000,
        priceSale: 12000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 11,
        name: 'Realme GT 2 Pro',
        quantity: 1,
        price: 14000000,
        priceSale: 13000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 12,
        name: 'Asus ROG Phone 6',
        quantity: 1,
        price: 30000000,
        priceSale: 29000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
    {
        id: 13,
        name: 'Huawei P50 Pro',
        quantity: 1,
        price: 27000000,
        priceSale: 26000000,
        img: 'https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2022_8_10_637957658354316100_samsung-galaxy-z-flip4-tim-1.jpg',
    },
];

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
                <SaleProduct productData={fakeData} />
            </>
            <>
                <BestSellingProduct productData={fakeData} />
            </>

            <>
                <Feature />
            </>
        </>
    );
}

export default HomePage;
