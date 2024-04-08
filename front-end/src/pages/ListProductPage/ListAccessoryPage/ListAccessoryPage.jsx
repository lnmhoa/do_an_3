// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import classNames from 'classnames/bind';
import styles from './ListAccessoryPage.module.scss';
import TopicProduct from '../../../components/TopicProduct/TopicProduct';
import Slides from '../../../components/Slider/Slider';
import Product from '../../../components/Product/Product';
import Filter from '../../../components/Filter/Filter';
import { useState } from 'react';

const SliderBanner = Slides.SliderBanner;
const SliderBrand = Slides.SliderBrand;

let ProductList = [
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
    { name: 'iPhone 13', price: 29990000, rate: 150, sold: 500 },
];

const ImageBannerItem = [
    {
        name: 'slide-image-1.png',
        path: '/',
    },
    {
        name: 'slide-image-2.png',
        path: '/',
    },
];

const ImageBrandItem = [
    {
        name: 'brand-1.webp',
        path: '/',
    },
    {
        name: 'brand-2.webp',
        path: '/',
    },
    {
        name: 'brand-3.webp',
        path: '/',
    },
    {
        name: 'brand-4.webp',
        path: '/',
    },
    {
        name: 'brand-5.webp',
        path: '/',
    },
    {
        name: 'brand-6.webp',
        path: '/',
    },
    {
        name: 'brand-7.webp',
        path: '/',
    },
    {
        name: 'brand-8.webp',
        path: '/',
    },
    {
        name: 'brand-9.webp',
        path: '/',
    },
    {
        name: 'brand-10.webp',
        path: '/',
    },
];

const cx = classNames.bind(styles);

// const path = window.location.pathname.split('/')[1];

function ListAccessoryPage({ title }) {
    const [countItem, setCountItem] = useState(() => (ProductList.length < 10 ? ProductList.length : 10));
    // Nếu sản phẩm hiện có mà ít hơn 10 thì nó là bằng tổng số sản phẩm không thì bằng 10

    const handleShowMore = () => {
        const newCount = countItem + 10; // Mỗi lần click thì cột thêm 10 sản phẩm
        setCountItem(newCount > ProductList.length ? ProductList.length : newCount); // Kiểm tra xem sau khi cộng 10 thì có lớn hơn tổng số không
    };

    const handleShowLess = () => {
        setCountItem(ProductList.length < 10 ? ProductList.length : 10);
    };
    return (
        <div>
            <SliderBanner heightSlide={200} arrayItem={ImageBannerItem} />
            <div className={cx('brand')}>
                <SliderBrand arrayItem={ImageBrandItem} />
            </div>
            <Breadcrumbs />
            <div className={cx('filter')}>
                <Filter />
            </div>
            <div className={cx('top-saler')}></div>
            <Product data={ProductList} countItem={countItem} nameTopic={'Phụ kiện'} seeAll={false} />
            {countItem === ProductList.length && countItem > 10 && (
                <div onClick={handleShowLess} className={cx('show-more')}>
                    Thu gọn &uarr;
                </div>
            )}
            {countItem < ProductList.length && (
                <div onClick={handleShowMore} className={cx('show-more')}>
                    Xem thêm &darr;
                </div>
            )}
        </div>
    );
}

export default ListAccessoryPage;
