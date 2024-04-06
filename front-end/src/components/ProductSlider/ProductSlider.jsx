import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './ProductSlider.module.scss';

const cx = classNames.bind(styles);

function ProductSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className={cx("container")}>
            <Slider arrows={false} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)} className={cx("slider")}>
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product-2.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product-2.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
            </Slider>
            
            <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                className={cx('sub-slider')}
            >
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product-2.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product-2.png')} alt="" />
                </div>
                <div>
                    <img src={require('../../image/Upload/Product/product.png')} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default ProductSlider;
