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

function SliderBanner({ heightSlide = 400, arrayItem = [] }) {
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
                {arrayItem.map((item, index) => {
                    return (
                        <Link key={index} target="_blank">
                            <img
                                style={{ height: heightSlide }}
                                src={require(`../../image/Upload/Slide/${item.name}`)}
                                alt="ac"
                            />
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
}

function SliderSale({ sale = true, count = 5, width = 'var(--max-width)', arrayItem = [] }) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: count,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container-sale')} style={{ width }}>
            {sale && (
                <div className={cx('flash-sale')}>
                    <div className={cx('text')}>
                        <span>flash</span>
                        <span>sale</span>
                    </div>
                    <CountDown targetTime={604800000} />
                </div>
            )}

            <div className={cx('container-product-sale')}>
                <Slider {...settings}>
                    {arrayItem.map((item, index) => {
                        return (
                            <BoxProduct style={{ margin: '20px' }} key={index} name={item.name} price={item.price} />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

function SliderBrand({ sale = true, count = 5, width = 'var(--max-width)', arrayItem = [] }) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: count,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container-brand')} style={{ width }}>
            <div className={cx('container-product-brand')}>
                <Slider {...settings}>
                    {arrayItem.map((item, index) => {
                        return (
                            <div>
                                <img src={require(`../../image/Upload/Slide/${item.name}`)} alt="ac" />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

const Slides = { SliderBanner, SliderSale, SliderBrand };

export default Slides;
