import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';

const cx = classNames.bind(styles);

const SliderHome = Slider.SliderHome;
const SliderSale = Slider.SliderSale;

function HomePage() {
    let defaultTitle = 'Trang chủ';
    useEffect(() => {
        document.title = defaultTitle;
    }, []);
    return (
        <>
            <>
                <SliderHome />
            </>
            <>
                <SliderSale />
            </>
            <>
                <Product />
            </>
        </>
    );
}

export default HomePage;
