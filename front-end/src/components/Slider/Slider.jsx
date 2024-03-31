import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import CountDown from '../CountDown/CountDown';
import BoxProduct from '../BoxProduct/BoxProduct';

const cx = classNames.bind(styles);

const ProductList = [
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '15px', zIndex: '1' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', left: '5px', zIndex: '1' }} onClick={onClick} />
    );
}

function SliderHome() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container')}>
            <Slider {...settings}>
                {ImageSlideItem.map((item, index) => {
                    return (
                        <Link key={index} target="_blank">
                            <img src={require(`../../image/Upload/Slide/${item.name}`)} alt="ac" />
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
}

function SliderSale({ sale = true, count = 5, width = 'var(--max-width)' }) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: count,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    console.log(sale);
    return (
        <div className={cx('container-sale')} style={{width}}>
            {!sale && ( <div className={cx('flash-sale')}>
                <div className={cx("text")}>
                    <span>flash</span>
                    <span>sale</span>
                </div>
                <CountDown targetTime={604800000} />
            </div>)}
           
            <div className={cx('container-product-sale')}>
                <Slider {...settings}>
                    {ProductList.map((item, index) => {
                        return (
                            <BoxProduct style={{ margin: '20px' }} key={index} name={item.name} price={item.price} />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

const Slides = { SliderHome, SliderSale };

export default Slides;
