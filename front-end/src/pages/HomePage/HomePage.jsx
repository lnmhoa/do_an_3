// import classNames from 'classnames/bind';
// import styles from './HomePage.module.scss';
import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';

// const cx = classNames.bind(styles);

const ProductList = [
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'Samsung Galaxy S22', price: 25990000, rate: 120, sold: 450 },
    { name: 'Xiaomi Mi 11 Lite', price: 7990000, rate: 80, sold: 300 },
    { name: 'OPPO Reno7', price: 14990000, rate: 90, sold: 350 },
    { name: 'Vivo V23', price: 13990000, rate: 70, sold: 250 },
    { name: 'Realme GT 2 Pro', price: 16990000, rate: 100, sold: 400 },
    { name: 'OnePlus 10 Pro', price: 28990000, rate: 130, sold: 480 },
    { name: 'Google Pixel 6', price: 21990000, rate: 110, sold: 420 },
    { name: 'Sony Xperia Pro-I', price: 31990000, rate: 140, sold: 520 },
    { name: 'Nokia G50', price: 5990000, rate: 60, sold: 200 },
];

const ImageSlideItem = [
    {
        name: 'slide1.webp',
        path: '/',
    },
    {
        name: 'slide2.webp',
        path: '/',
    },
    {
        name: 'slide3.webp',
        path: '/',
    },
    {
        name: 'slide4.webp',
        path: '/',
    },
    {
        name: 'slide5.webp',
        path: '/',
    },
    {
        name: 'slide6.webp',
        path: '/',
    },
];

const ProductSlideItem = [
    {
        name: 'Iphone 15',
        price: '10000000',
    },
    {
        name: 'Iphone 14',
        price: '10000000',
    },
    {
        name: 'Iphone 13',
        price: '10000000',
    },
    {
        name: 'Iphone 12',
        price: '10000000',
    },
    {
        name: 'Iphone 11',
        price: '10000000',
    },
    {
        name: 'Iphone 10',
        price: '10000000',
    },
    {
        name: 'Iphone 9',
        price: '10000000',
    },
    {
        name: 'Iphone 8',
        price: '10000000',
    },
];

const SliderHome = Slider.SliderBanner;
const SliderSale = Slider.SliderSale;

function HomePage() {
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);
    return (
        <>
            <>
                <SliderHome arrayItem={ImageSlideItem} />
            </>
            <>
                <SliderSale arrayItem={ProductList} />
            </>
            <>
                <Product data={ProductList} countItem={10} nameTopic={'Laptop'} />
                <Product data={ProductList} countItem={10} nameTopic={'Điện thoại'} />
                <Product data={ProductList} countItem={10} nameTopic={'Phụ kiện'} />
            </>
        </>
    );
}

export default HomePage;
