import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BoxProduct.module.scss';
import { FaStar } from 'react-icons/fa';

const cx = classNames.bind(styles);

var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'vnd',
});

function BoxProduct({ name, price, rate, sold }) {
    return (
        <Link to="/detail-product/phone" className={cx('box-product')}>
            <img src={require('../../image/Upload/Product/product.jpg')} alt="" />
            <div className={cx('sub-container')}>
                <strong>{name}</strong>
                <div className={cx('name-price')}>
                    <span>{formatter.format(price)}</span> <span>{formatter.format(price)}</span>
                </div>

                {rate && sold && (
                    <div className={cx('sold-rate')}>
                        <span>Đã bán: {sold}</span>
                        <span>
                            {rate}
                            <FaStar style={{color: "var(--color-2)"}}/>
                        </span>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default BoxProduct;
