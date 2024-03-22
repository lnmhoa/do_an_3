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
        <Link to='/detail-product/phone' className={cx('box-product')}>
            <img src={require('../../image/Upload/Product/product.jpg')} alt="" style={{ width: '70%' }} />
            <strong>{name}</strong>
            <div>
                <span style={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}>{formatter.format(price)}</span>{' '}
                <span style={{textDecoration: 'line-through', fontSize: 11 }}>{formatter.format(price)}</span>
            </div>
            {rate && sold && (
                <div
                    style={{
                        display: 'flex',
                        gap: 10,
                        fontSize: 9,
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'flex-end',
                    }}
                >
                    <span>Đã bán: {sold}</span>
                    <span style={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                        {rate}
                        <FaStar />
                    </span>
                </div>
            )}
        </Link>
    );
}

export default BoxProduct;
