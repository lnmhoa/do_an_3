import React from 'react';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import BoxProduct from '../BoxProduct/BoxProduct';

const cx = classNames.bind(styles);

const Products = [
    {
        name: 'Iphone 14',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 13',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 12',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 11',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 10',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 14',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 13',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 12',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 11',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 10',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 9',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 8',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 15',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 14',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 13',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 12',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 11',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 10',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 9',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
    {
        name: 'Iphone 8',
        price: '10000000',
        sold: '9999',
        comment: '10000000',
    },
];

function Product() {
    const ProductList = [];

    for (let index in Products) {
        ProductList.push(
            <BoxProduct
                name={Products[index].name}
                price={Products[index].price}
                key={index}
                comment={Products[index].comment}
                sold={Products[index].sold}
            />,
        );
    }
    console.log(ProductList);
    return <div className={cx('container')}>{ProductList}</div>;
}

export default Product;
