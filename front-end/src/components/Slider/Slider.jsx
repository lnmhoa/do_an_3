import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import { BsFillLightningFill } from 'react-icons/bs';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'vnd',
});

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
            <img src={require('../../imgProduct/product.jpg')} alt="" style={{ width: '70%' }} />
            <strong>{name}</strong>
            <div>
                <span style={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}>{formatter.format(price)}</span>{' '}
                <span style={{ textDecoration: 'line-through', fontSize: 11 }}>{formatter.format(price)}</span>
            </div>
        </div>
    );
}

function SliderSale() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container-sale')}>
            <div
                style={{
                    fontSize: '35px',
                    margin: '5px 0',
                    color: '#fc521d',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                }}
            >
                F<BsFillLightningFill fontSize="25px" />
                ash sale
            </div>
            <div className={cx('container-product-sale')}>
                <Slider {...settings}>
                    {Product.map((item, index) => {
                        return <BoxProduct key={index} name={item.name} price={item.price} />;
                    })}
                </Slider>
            </div>
        </div>
    );
}

const Slides = { SliderHome, SliderSale };

export default Slides;
