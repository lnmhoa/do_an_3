// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import classNames from 'classnames/bind';
import styles from './ListAccessoryPage.module.scss';
import TopicProduct from '../../../components/TopicProduct/TopicProduct';
import Product from '../../../components/Product/Product';
import Filter from '../../../components/Filter/Filter';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import {search, create} from '../../../services/search';

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
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     document.title = title;
    // }, [title]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/api/product/get-all');
    //             setData(response.data.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    console.log(countItem);
    return (
        <div>
            {/* Slide */}
            <div className={cx('slider')}></div>
            <div className={cx('brand')}></div>
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
