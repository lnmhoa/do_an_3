// import classNames from 'classnames/bind';
// import styles from './HomePage.module.scss';
import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
import TopicProduct from '../../components/TopicProduct/TopicProduct';

// const cx = classNames.bind(styles);

let ProductList = [
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

const SliderHome = Slider.SliderHome;
const SliderSale = Slider.SliderSale;

function HomePage() {
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);
    return (
        <>
            <>
                <SliderHome />
            </>
            <>
                <SliderSale />
            </>
            <>
                <TopicProduct topicName={'Laptop'} />
                <Product data={ProductList} />
                <TopicProduct topicName={'Điện thoại'} />
                <Product data={ProductList} />
                <TopicProduct topicName={'Phụ kiện'} />
                <Product data={ProductList} />
            </>
        </>
    );
}

export default HomePage;
