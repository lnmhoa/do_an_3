import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import BoxProduct from '../BoxProduct/BoxProduct';
import TopicProduct from '../TopicProduct/TopicProduct';

const cx = classNames.bind(styles);

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
    // { name: 'Huawei P50 Pro', price: 23990000, rate: 100, sold: 380 },
    // { name: 'LG Velvet 2 Pro', price: 17990000, rate: 80, sold: 320 },
    // { name: 'Motorola Edge X30', price: 18990000, rate: 90, sold: 340 },
    // { name: 'Asus Zenfone 8 Flip', price: 15990000, rate: 70, sold: 270 },
    // { name: 'Honor Magic4', price: 20990000, rate: 110, sold: 400 },
    // { name: 'Lenovo Legion Y90', price: 34990000, rate: 150, sold: 550 },
    // { name: 'ZTE Axon 30 Ultra', price: 17990000, rate: 80, sold: 310 },
    // { name: 'TCL 30 Pro', price: 12990000, rate: 60, sold: 230 },
    // { name: 'Meizu 19 Pro', price: 16990000, rate: 80, sold: 320 },
    // { name: 'Poco X4 Pro', price: 11990000, rate: 50, sold: 180 },
];

function Product() {
    const ProductItemList = [];

    for (let index in ProductList) {
        ProductItemList.push(
            <BoxProduct
                name={ProductList[index].name}
                price={ProductList[index].price}
                rate={ProductList[index].rate}
                sold={ProductList[index].sold}
                key={index}
            />,
        );
    }
    return (
        <>
            <TopicProduct topicName={'điện thoại'} />
            <div className={cx('container')}>{ProductItemList}</div>
            <TopicProduct topicName={'Laptop'} />
            <div className={cx('container')}>{ProductItemList}</div>
            <TopicProduct topicName={'Phụ Kiện'} />
            <div className={cx('container')}>{ProductItemList}</div>
        </>
    );
}

export default Product;
