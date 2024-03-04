import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoxProduct.module.scss';

const cx = classNames.bind(styles);

var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'vnd',
});

function BoxProduct({ name, price, comment, sold }) {
    return (
        <div className={cx('box-product')}>
            <img src={require('../../imgProduct/product.jpg')} alt="" style={{ width: '70%' }} />
            <strong>{name}</strong>
            <div>
                <span style={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}>{formatter.format(price)}</span>{' '}
                <span style={{ textDecoration: 'line-through', fontSize: 11 }}>{formatter.format(price)}</span>
            </div>
            {comment && sold && (
                <div>
                    <span>{comment}</span>
                    <span>{sold}</span>
                </div>
            )}
        </div>
    );
}

export default BoxProduct;
