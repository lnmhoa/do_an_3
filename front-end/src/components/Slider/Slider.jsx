import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

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
                            <img style={{ height: heightSlide }} src={`${item.name}`} alt="ac" />
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SliderBanner;
