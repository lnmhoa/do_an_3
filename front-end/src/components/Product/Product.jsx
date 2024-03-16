import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import BoxProduct from '../BoxProduct/BoxProduct';

const cx = classNames.bind(styles);



function Product({data, countItem}) {
    const ProductItemList = [];

    for (let index = 0; index < countItem; index++) {
        ProductItemList.push(
            <BoxProduct
                name={data[index].name}
                price={data[index].price}
                rate={data[index].rate}
                sold={data[index].sold}
                key={index}
            />,
        );
    }
    return (
        <>
            <div className={cx('container')}>{ProductItemList}</div>
        </>
    );
}

export default Product;
