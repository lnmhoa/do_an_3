import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';

const Product = [
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

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '30px', zIndex: '1'}}
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
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
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
                            <img src={require(`../../imgSlide/${item.name}`)} alt="ac" />
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
}

function BoxProduct({ name, price }) {
    return (
        <div className={cx('box-product')}>
            <img src={require('../../imgProduct/product.jpg')} alt="" style={{ width: '60%', borderRadius: 5 }} />
            <div style={{fontWeight: 'bold', fontSize: '12px'}}>{name}</div>
            <div>{price}</div>
        </div>
    );
}

function SliderSale() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container-sale')}>
            <Slider {...settings}>
                {/* {Product.map((item, index) => {
                    console.log(item);
                    return <BoxProduct name={item.name} price={item.price} />;
                })} */}

                <BoxProduct name={'iphone 15'} price={15555555} />
                <BoxProduct name={'iphone 13'} price={15555555} />
                <BoxProduct name={'iphone 14'} price={15555555} />
                <BoxProduct name={'iphone 16'} price={15555555} />
                <BoxProduct name={'iphone 16'} price={15555555} />
                <BoxProduct name={'iphone 17'} price={15555555} />
                <BoxProduct name={'iphone 19'} price={15555555} />
                <BoxProduct name={'iphone 16'} price={15555555} />
            </Slider>
        </div>
    );
}

const Slides = { SliderHome, SliderSale };

export default Slides;
